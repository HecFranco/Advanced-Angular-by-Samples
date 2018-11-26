import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: '../views/store.component.html',
  styleUrls: ['../styles/store.component.scss']
})
export class StoreComponent {
  public title;
  public groundsName: string;
  public myPark;

  constructor() {
    this.title = 'This is the Store';
  }

  showName() {
    console.log("Name of Grounds : ", this.groundsName);
  }
  showGroundsData(event) {
    console.log(event);
    this.myPark = event;
  }
}
