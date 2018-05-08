# 05 Hooks_OnChange

In this sample we will see the use of hooks for the life cycle of a component.

We will take as a starting point sample [04_Hook_OnChange](../04_Hook_OnChange/AngularCLI/).

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) if they are not already installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

Install [TypeScript](https://www.typescriptlang.org/) suing `npm install -global typescript`.

Install [Angular CLI Global](https://cli.angular.io/) using `npm install -global @angular/cli`.

> Verify that you are running at least [TypeScript](https://www.typescriptlang.org/) and [Angular CLI](https://cli.angular.io/) running `tsc -v` and `ng --version` in a terminal/console window. Older versions may produce errors.

## Lifecycle Hooks

A component has a lifecycle managed by Angular.

Angular creates it, renders it, creates and renders its children, checks it when its data-bound properties change, and destroys it before removing it from the DOM.

Angular offers lifecycle hooks that provide visibility into these key life moments and the ability to act when they occur.

A directive has the same set of lifecycle hooks.

## ngOnInit()

`ngOnInit` is called right after the directive's data-bound properties have been checked for the first time, and before any of its children have been checked. It is invoked only once when the directive is instantiated.

## Steps to build it

1. Copy the content from [04_Hook_OnChange](../04_Hook_OnChange/AngularCLI/) and execute:

```bash
npm install
```

> To understand the behavior of the demo, start the server in the console using the command `ng serve` and acecde to [http://localhost:4200/](http://localhost:4200/) Also open the developer tools option **console**.

2. Add **OnInit** component, for then create a new method `ngOnInit(){}`.

_[src/app/components/grounds.components.ts](./src/app/components/grounds.components.ts)_
```diff
-- import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
++ import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
@Component({
  selector: 'app-grounds',
  templateUrl: '../views/grounds.component.html',
  styleUrls: ['../styles/grounds.component.scss']
})
-- export class GroundsComponent implements OnChanges {
++ export class GroundsComponent implements OnChanges, OnInit {  
  public title: string;
  @Input() name: string;
  @Input('square_meter') surface: number;
  public typeOfVegetation: string;
  public open: boolean;

  @Output() giveMeData = new EventEmitter();

  constructor() { 
    this.title = 'This is the Park';
    this.name = 'Example of Name using input - Value initial';
    this.surface = 200;
    this.typeOfVegetation = 'High';
    this.open = true;
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('There are changes in the properties: ', changes);
  }

++ ngOnInit(){
++  console.log('OnInit Method launch');
++ }

  issueEvent() {
    this.giveMeData.emit({
      'title': this.title,
      'name': this.name,
      'surface': this.surface,
      'typeOfVegetation': this.typeOfVegetation,
      'open': this.open
    });
  }
}
```

> You will see that the method `ngOnChanges(){}` is first executed, when it is changed when the component is created and later `ngOnInit(){}` when the component is started.