# 08 Routing

In this sample we will see the use of hooks for the life cycle of a component.

We will take as a starting point sample [07_Hook_OnDestroy](../07_Hook_OnDestroy/AngularCLI/).

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) if they are not already installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

Install [TypeScript](https://www.typescriptlang.org/) suing `npm install -global typescript`.

Install [Angular CLI Global](https://cli.angular.io/) using `npm install -global @angular/cli`.

> Verify that you are running at least [TypeScript](https://www.typescriptlang.org/) and [Angular CLI](https://cli.angular.io/) running `tsc -v` and `ng --version` in a terminal/console window. Older versions may produce errors.

## Routing

When we start our project, we indicate the routing option, `ng new AngularCLI --style scss --routing`. In this way, an [app-routing.module.ts](./AngularCLI/src/app/app-routing.module.ts) file was autogenero with a first configuration for the routing of components.

_[app-routing.module.ts](./AngularCLI/src/app/app-routing.module.ts)_
```ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```


## Steps to build it

1. Copy the content from [07_Hook_OnDestroy](../07_Hook_OnDestroy/AngularCLI/) and execute:

```bash
npm install
```

> To understand the behavior of the demo, start the server in the console using the command `ng serve` and acecde to [http://localhost:4200/](http://localhost:4200/) Also open the developer tools option **console**.

### Configure Route System

1. We will add a new module of the core for route management, `ModuleWithProviders`, in addition to the components in use.

_[app-routing.module.ts](./AngularCLI/src/app/app-routing.module.ts)_
```diff
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

++ import { StoreComponent } from './components/store.component';
++ import { GroundsComponent } from './components/grounds.component';

-- const routes: Routes = [];
++ const routes: Routes = [
++  { path:'', component: StoreComponent },
++  { path:'', redirecTo: 'store', pathMatch: 'full' },
++  { path:'store', component: StoreComponent }
++  { path:'**', component: StoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

> It is also necessary to indicate the array that will include the routes related to each component.

* This route redirects a URL that fully matches the empty path to the route whose path is `/store`. After the browser refreshes, the router loads the `StoreComponent` and the browser address bar shows the `/store` URL.
* The route `{ path:'**', component: StoreComponent }` indicates that when it is not found, or a **404** error occurs, you will be forwarded to this component.


