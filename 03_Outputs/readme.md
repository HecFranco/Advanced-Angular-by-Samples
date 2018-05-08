# 02 Install Angular

## Inputs
_[src/app/app.component.html](./AngularCLI/src/app/app.component.html)_
```diff
<div style="text-align:center">
   <h1>
     Welcome to {{ title }}!
   </h1>
</div>
++ <app-store></app-store>
++ <hr/>
-- <app-grounds></app-grounds>
<router-outlet></router-outlet>
```

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
++  public groundsName: string;

  constructor() { 
    this.title = 'This is the Store';
  }

  ngOnInit() {
  }

++ showName(){
++   console.log("Name of Grounds : ", this.groundsName);
++ }
}
```

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


_[src/app/components/grounds.components.ts](./src/app/components/grounds.components.ts)_
```diff
-- import { Component, OnInit } from '@angular/core';
++ import { Component, OnInit, Input } from '@angular/core';

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

  ngOnInit() {
  }

}
```

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

_[src/app/components/grounds.components.ts](./src/app/components/grounds.components.ts)_
```diff
-- import { Component, OnInit } from '@angular/core';
++ import { Component, OnInit, Input } from '@angular/core';

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

  ngOnInit() {
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

## Outputs

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

  ngOnInit() {
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