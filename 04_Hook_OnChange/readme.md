# 04 Hooks_OnChange

In this sample we will see the use of hooks for the life cycle of a component.

We will take as a starting point sample [03_Outputs](../03_Outputs/AngularCLI/).

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

## ngOnChanges()

Respond when Angular (re)sets data-bound input properties. The method receives a `SimpleChanges` object of current and previous property values.

Called before `ngOnInit()` and whenever one or more data-bound input properties change.

## Steps to build it

1. Copy the content from [03_Outputs](../03_Outputs/AngularCLI/) and execute:

```bash
npm install
```

> To understand the behavior of the demo, start the server in the console using the command `ng serve` and acecde to [http://localhost:4200/](http://localhost:4200/) Also open the developer tools option **console**.

2. Add **SimpleChange** and **OnChanges** components, for then create a new method `ngOnChanges(){}`.

_[src/app/components/grounds.components.ts](./src/app/components/grounds.components.ts)_
```diff
-- import { Component, Input, Output, EventEmitter } from '@angular/core';
++ import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-grounds',
  templateUrl: '../views/grounds.component.html',
  styleUrls: ['../styles/grounds.component.scss']
})
-- export class GroundsComponent {
++ export class GroundsComponent implements OnChanges {
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

++ ngOnChanges(changes:SimpleChanges){
++  console.log('There are changes in the properties: ', changes);
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

> A `changes` object whose keys are property names and values are instances of `SimpleChange`.
> `ngOnChanges` is called right after the data-bound properties have been checked and before view and content children are checked if at least one of them has changed. The `changes` parameter contains the changed properties.

3. Execute `ng serve` to view the result in and open [http://localhost:4200/](http://localhost:4200/).

> Every time we modify the properties, the object changes, showing the changes.

> if we modified the view so that new values ​​entered in the component, this would be understood as a change and the `ngOnChanges(changes:SimpleChanges){}` method would be activated, showing the `changes` object.

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
<div *ngIf="myPark">
  <h4>Data of My Park from Son</h4>
  <ol >
      <li>{{myPark.name}}</li>
      <li>{{myPark.surface}}</li>
      <li>{{myPark.typeOfVegetation}}</li>
      <li>{{myPark.open}}</li>
    </ol>
</div> 
<hr/>
-- <p *ngIf="groundsName">
  Son:
-- <app-grounds [name]="groundsName" 
++ <app-grounds [name]="'Deafult Name'" 
-- [square_meter]=300
++ [square_meter]=589
  (giveMeData)="showGroundsData($event)">
  </app-grounds>
-- </p>
```