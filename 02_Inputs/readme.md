# 02 Inputs

In this sample We will continue the previous example and learn to use inputs.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) if they are not already installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

Install [TypeScript](https://www.typescriptlang.org/) suing `npm install -global typescript`.

Install [Angular CLI Global](https://cli.angular.io/) using `npm install -global @angular/cli`.

> Verify that you are running at least [TypeScript](https://www.typescriptlang.org/) and [Angular CLI](https://cli.angular.io/) running `tsc -v` and `ng --version` in a terminal/console window. Older versions may produce errors.

## Steps to build it

> We will relocate the `<app-grounds></app-grounds>` component as the `<app-store></app-store>` child.

> To understand the behavior of the demo, start the server in the console using the command `ng serve` and acecde to [http://localhost:4200/](http://localhost:4200/) Also open the developer tools option **console**.

1. We removed the `<app-grounds></app-grounds>` component from view of [src/app/app.component.html](./AngularCLI/src/app/app.component.html).

_[src/app/app.component.html](./AngularCLI/src/app/app.component.html)_
```diff
<div style="text-align:center">
   <h1>
     Welcome to {{ title }}!
   </h1>
</div>
<app-store></app-store>
<hr/>
-- <app-grounds></app-grounds>
<router-outlet></router-outlet>
```

2. We include in the [src/app/components/store.components.ts](./src/app/components/store.components.ts) a variable that receives the name of the `<app-grounds></app-grounds>` component, `public groundsName: string;`. We will also add a method that shows that data in console, `showName(){}`.

_[src/app/components/store.components.ts](./src/app/components/store.components.ts)_
```diff
import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: '../views/store.component.html',
  styleUrls: ['../styles/store.component.scss']
})
export class StoreComponent implements OnInit {
  public title;
++  public groundsName: string;

  constructor() { 
    this.title = 'This is the Store';
  }

++ showName(){
++   console.log("Name of Grounds : ", this.groundsName);
++ }
}
```

3. We will modify the [src/app/views/store.components.html](./src/app/views/store.components.html) view to include your `<app-grounds></app-grounds>` child and also include an input that receives the new name, `[(ngModel)]="groundsName"` and execute the `showName()` function each time the key is raised (`(keyup)=""`).

_[src/app/views/store.components.html](./src/app/views/store.components.html)_
```diff
<h1>{{title}}</h1>
<hr/>
++ Father:
<ul>
  <li>Rose Shirt</li>
  <li>Black Hat</li>
</ul>
++ Grounds Name: 
++ <input type="text" [(ngModel)]="groundsName" (keyup)="showName()"/>

++ <hr/>
++ Son:
++ <app-grounds></app-grounds>
```

4. We add the option to show the captured data.

_[src/app/views/store.components.html](./src/app/views/store.components.html)_
```diff
<h1>{{title}}</h1>
<hr/>
Father:
<ul>
  <li>Rose Shirt</li>
  <li>Black Hat</li>
</ul>
++ <p>
Grounds Name: 
<input type="text" [(ngModel)]="groundsName" (keyup)="showName()"/>
++ </p>
++ <p>
++ Result : {{groundsName}}
++ </p>
<hr/>
Son:
<app-grounds></app-grounds>
```

5. We add the `input` functionality of the angular core, and the variable with the decorator `@Input()`, `@Input() name: string;`, which will receive the data. In addition we will give an initial value to that variable, `this.name = 'Example of Name using input - Value initial';`.

_[src/app/components/grounds.components.ts](./src/app/components/grounds.components.ts)_
```diff
-- import { Component } from '@angular/core';
++ import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grounds',
  templateUrl: '../views/grounds.component.html',
  styleUrls: ['../styles/grounds.component.scss']
})
export class GroundsComponent implements OnInit {
  public title: string;
++ @Input() name: string;
  public surface: number;
  public typeOfVegetation: string;
  public open: boolean;

  constructor() { 
    this.title = 'This is the Park';
++  this.name = 'Example of Name using input - Value initial';
    this.surface = 200;
    this.typeOfVegetation = 'High';
    this.open = true;
  }

}
```

6. The next step will be to add the option to visualize the entry in the son of the new data.

_[src/app/views/grounds.components.html](./src/app/views/grounds.components.html)_
```diff
<h1>{{title}}</h1>
++ <h1>Result of input {{name}}</h1>
<ol>
  <li>Surface : {{surface}} m2</li>
  <li>Type of Vegetation : {{typeOfVegetation}}</li>
  <li>
    <span *ngIf="open == true">Open</span>
    <span *ngIf="open != true">Close</span>
  </li>
</ol>
```

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
<hr/>
Son:
-- <app-grounds></app-grounds>
++ <app-grounds [name]="'Result of example using input'"></app-grounds>
```

7. And indicate the input variable in the component.

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
<hr/>
Son:
-- <app-grounds [name]="'Result of example using input'"></app-grounds>
++ <app-grounds [name]="groundsName"></app-grounds>
```

8. We improved the example by adding the option to only show the data when it is created.

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
<hr/>
++ <p *ngIf="groundsName">
  Son:
  <app-grounds [name]="groundsName"></app-grounds>
++ </p>
```

> We can also introduce other initial values ​​in the component.

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
<hr/>
<p *ngIf="groundsName">
  Son:
-- <app-grounds [name]="groundsName"></app-grounds>
++ <app-grounds [name]="groundsName" [surface]=300></app-grounds>
</p>
```

### Using Alias

> We can also use aliases to refer to the variables.

_[src/app/components/grounds.components.ts](./src/app/components/grounds.components.ts)_
```diff
-- import { Component } from '@angular/core';
++ import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grounds',
  templateUrl: '../views/grounds.component.html',
  styleUrls: ['../styles/grounds.component.scss']
})
export class GroundsComponent implements OnInit {
  public title: string;
++ @Input() name: string;
-- public surface: number;
++ @Input('square_meter') surface: number;
  public typeOfVegetation: string;
  public open: boolean;

  constructor() { 
    this.title = 'This is the Park';
++  this.name = 'Example of Name using input - Value initial';
    this.surface = 200;
    this.typeOfVegetation = 'High';
    this.open = true;
  }

}
```

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
<hr/>
<p *ngIf="groundsName">
  Son:
-- <app-grounds [name]="groundsName" [surface]=300></app-grounds>
++ <app-grounds [name]="groundsName" [square_meter]=300></app-grounds>
</p>
```