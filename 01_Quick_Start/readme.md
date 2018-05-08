# 01 Quick Start

In this sample we will create a Advanced project using **Angular CLI**.

Summary steps:
- [Install Angular CLI Global](#install-angular-cli-global)
- [Configuration Angular CLI](#configuration-angular-cli)
- [First Component](#first-component)
- [Second Component](#second-component)

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) if they are not already installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

Install [TypeScript](https://www.typescriptlang.org/) suing `npm install -global typescript`.

Install [Angular CLI Global](https://cli.angular.io/) using `npm install -global @angular/cli`.

> Verify that you are running at least [TypeScript](https://www.typescriptlang.org/) and [Angular CLI](https://cli.angular.io/) running `tsc -v` and `ng --version` in a terminal/console window. Older versions may produce errors.

## Steps to build it

### Install Angular CLI Global

- Install **Angular CLI** using the command : `npm install -g @angular/cli`. You can view your **Angular CLI** version if write in console `ng --version`.

- we can create a new project, using `ng new AngularCLI --style scss --routing`, this command would generate a folder with name [AngularCLI](./AngularCLI) with our project **Angular CLI**.

> If we use the command `ng new AngularCLI --style scss --routing --dry-run` we will simulate the generation of the project indicating which files and folders will be created.

### Configuration Angular CLI

- First, we will access the folder of our project by writing in `cd AngularCLI` console.

> We can access the project configuration within [.angular-cli.json](./AngularCLI/.angular-cli.json).

> [.gitignore](./AngularCLI/.gitignore), will configure the files that our version manager will ignore **git**.
> [karma.conf.js](./AngularCLI/karma.conf.js), 
will configure the **Karma** and **Jasmine** component that will allow us to perform the tests on the application.
> [package.json](./AngularCLI/package.json), this file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies.
> [protactor.conf.js](./AngularCLI/protactor.conf.js), **Protractor** is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.
> [README.md](./AngularCLI/README.md), explains how to start the project.

- Access to project folder using `cd AngularCLI` and anstall the npm packages described in the `package.json` and verify that it works:

```bash
npm install
```

_[src/app/app.module.ts](./src/app/app.module.ts)_
```diff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
++ import { FormsModule } from '@angular/forms';
++ import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
++  FormsModule,
++  HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Finally we can check the sample is working as _[AngularCLI](./AngularCLI/)_ executing from the command line `ng serve` and opening [http://localhost:4200/](http://localhost:4200/).

### First Component

Create first component **Store** with the command `ng generate component store --style scss`.

> This command will have generated a file structure inside the store folder located in [src/app/](./src/app/). We will use a folder structure (components, styles, views, test)

_[src/app/components/store.components.ts](./src/app/components/store.components.ts)_
```diff
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
-- templateUrl: './store.component.html',
++ templateUrl: '../views/store.component.html',
-- styleUrls: ['./store.component.scss']
++ styleUrls: ['../styles/store.component.scss']
})
export class StoreComponent implements OnInit {
++ public title;

-- constructor() { }
++ constructor() { 
++  this.title = 'This is the Store';
++ }

  ngOnInit() {
  }

}
```

_[src/app/views/store.components.html](./src/app/views/store.components.html)_
```diff
-- <p>
--  store works!
-- </p>
++ <h1>{{title}}</h1>
++ <ul>
++  <li>Rose Shirt</li>
++  <li>Black Hat</li>
++ </ul>
```

_[src/app/styles/store.components.scss](./src/app/styles/store.components.scss)_
```diff
++ h1 {
++  color:blue;
++ }
++ ul {
++  color:white;  
++  background:red;
++ }
```

_[src/app/app.module.ts](./src/app/app.module.ts)_
```diff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
-- import { StoreComponent } from './store/store.component';
++ import { StoreComponent } from './components/store.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Second Component

Create first component **Store** with the command `ng generate component grounds --style scss`.

> This command will have generated a file structure inside the store folder located in [src/app/](./src/app/). We will use a folder structure (components, styles, views, test)

_[src/app/components/grounds.components.ts](./src/app/components/grounds.components.ts)_
```diff
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grounds',
-- templateUrl: './grounds.component.html',
++ templateUrl: '../views/grounds.component.html',
-- styleUrls: ['./grounds.component.scss']
++ styleUrls: ['../styles/grounds.component.scss']
})
export class GroundsComponent implements OnInit {
++ public title: string;
++ public surface: number;
++ public typeOfVegetation: string;
++ public open: boolean;

-- constructor() { }
++ constructor() { 
++  this.title = 'This is the Park';
++  this.surface = 200;
++  this.typeOfVegetation = 'High';
++  this.open = true;
++ }

  ngOnInit() {
  }

}
```

_[src/app/views/grounds.components.html](./src/app/views/grounds.components.html)_
```diff
-- <p>
--  grounds works!
-- </p>
++ <h1>{{title}}</h1>
++ <ol>
++  <li>Surface : {{surface}} m2</li>
++  <li>Type of Vegetation : {{typeOfVegetation}}</li>
++  <li>
++    <span *ngIf="open == true">Open</span>
++    <span *ngIf="open != true">Close</span>
++  </li>
++ </ol>
```

_[src/app/styles/grounds.components.scss](./src/app/styles/grounds.components.scss)_
```diff
++ h1 {
++  color:blue;
++ }
++ ul {
++  background:red;
++ }
```

_[src/app/app.module.ts](./src/app/app.module.ts)_
```diff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StoreComponent } from './components/store.component';
++ import { GroundsComponent } from './components/grounds.component';

@NgModule({
  declarations: [
    AppComponent,
--  StoreComponent
++  StoreComponent,
++  GroundsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

To view the result update [src/app/app.component.html](./src/app/app.component.html) with both new components.

_[src/app/app.component.html](./AngularCLI/src/app/app.component.html)_
```diff
-- <!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
   <h1>
     Welcome to {{ title }}!
   </h1>
--   <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
-- </div>
-- <h2>Here are some links to help you start: </h2>
-- <ul>
--   <li>
--     <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
--   </li>
--   <li>
--     <h2><a target="_blank" rel="noopener" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a></h2>
--   </li>
--   <li>
--     <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
--   </li>
-- </ul>
</div>
++ <app-store></app-store>
++ <hr/>
++ <app-grounds></app-grounds>
<router-outlet></router-outlet>
```

Finally we can check the sample is working the demo executing from the command line `ng serve` and opening [http://localhost:4200/](http://localhost:4200/).