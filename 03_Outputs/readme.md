# 03 Outputs

In this sample We will continue the previous example and learn to use inputs.

We will take as a starting point sample [02_Inputs](../02_Inputs/AngularCLI/).

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) if they are not already installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

Install [TypeScript](https://www.typescriptlang.org/) suing `npm install -global typescript`.

Install [Angular CLI Global](https://cli.angular.io/) using `npm install -global @angular/cli`.

> Verify that you are running at least [TypeScript](https://www.typescriptlang.org/) and [Angular CLI](https://cli.angular.io/) running `tsc -v` and `ng --version` in a terminal/console window. Older versions may produce errors.

## Steps to build it

1. Copy the content from [02_Inputs](../02_Inputs/AngularCLI/) and execute:

```bash
npm install
```

> To understand the behavior of the demo, start the server in the console using the command `ng serve` and acecde to [http://localhost:4200/](http://localhost:4200/) Also open the developer tools option **console**.

2. We add the core components of Angular **[Output](https://angular.io/api/core/Output)** and **[EventEmitter](https://angular.io/api/core/EventEmitter)**, we will also need a variable with the decorator `@output`, `@Output() giveMeData = new EventEmitter();`, and a function that collects the data we want to upload to the father, `issueEvent(){}`.

_[src/app/components/grounds.components.ts](./src/app/components/grounds.components.ts)_
```diff
-- import { Component, OnInit, Input } from '@angular/core';
++ import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grounds',
  templateUrl: '../views/grounds.component.html',
  styleUrls: ['../styles/grounds.component.scss']
})
export class GroundsComponent implements OnInit {
  public title: string;
  @Input() name: string;
  @Input('square_meter') surface: number;
  public typeOfVegetation: string;
  public open: boolean;

++ @Output() giveMeData = new EventEmitter();

  constructor() { 
    this.title = 'This is the Park';
    this.name = 'Example of Name using input - Value initial';
    this.surface = 200;
    this.typeOfVegetation = 'High';
    this.open = true;
  }

++ issueEvent() {
++  this.giveMeData.emit({
++     'title': this.title,
++     'name': this.name,
++     'surface': this.surface,
++     'typeOfVegetation': this.typeOfVegetation,
++     'open': this.open
++   });
++ }
}
```

3. Within the view of the child component we will include a button with an event that sends the information to the parent, `<button (click)="issueEvent($event)">Show the father</button>`.

_[src/app/views/grounds.components.html](./src/app/views/grounds.components.html)_
```diff
<h1>{{title}}</h1>
<h1>Result of input {{name}}</h1>
<ol>
  <li>Name : {{name}}</li>
  <li>Surface : {{surface}} m2</li>
  <li>Type of Vegetation : {{typeOfVegetation}}</li>
  <li>
    <span *ngIf="open == true">Open</span>
    <span *ngIf="open != true">Close</span>
  </li>
</ol>
++ <button (click)="issueEvent($event)">Show the father</button>
```

4. The parent component will need a variable that stores this information, `public myPark;`, and a function that shows it, `showGroundsData(event){}`.

_[src/app/components/store.components.ts](./src/app/components/store.components.ts)_
```diff
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: '../views/store.component.html',
  styleUrls: ['../styles/store.component.scss']
})
export class StoreComponent implements OnInit {
  public title;
  public groundsName: string;
++ public myPark;

  constructor() { 
    this.title = 'This is the Store';
  }

  ngOnInit() {
  }

  showName(){
    console.log("Name of Grounds : ", this.groundsName);
  }

++ showGroundsData(event){
++   console.log(event);
++   this.myPark = event;
++ }  
}
```

5. We add in the view of the parent component the sample of said information and the method that was thrown from the method that shows it.

_[src/app/views/store.components.html](./src/app/views/store.components.html)_
```diff
<h1>{{title}}</h1>
<hr/>
Father:
<ul>
  <li>Rose Shirt</li>
  <li>Black Hat</li>
</ul>
<p>
  Grounds Name: 
  <input type="text" [(ngModel)]="groundsName" (keyup)="showName()"/>
</p>
<p>
  Result : {{groundsName}}
</p>
++ <div *ngIf="myPark">
++   <h4>Data of My Park from Son</h4>
++   <ol >
++       <li>{{myPark.name}}</li>
++       <li>{{myPark.surface}}</li>
++       <li>{{myPark.typeOfVegetation}}</li>
++       <li>{{myPark.open}}</li>
++     </ol>
++ </div> 
<hr/>
<p *ngIf="groundsName">
  Son:
  <app-grounds [name]="groundsName" 
  [square_meter]=300
++ (giveMeData)="showGroundsData($event)">
  </app-grounds>
</p>
```