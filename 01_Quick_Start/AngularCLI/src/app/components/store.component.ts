import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: '../views/store.component.html',
  styleUrls: ['../styles/store.component.scss']
})
export class StoreComponent implements OnInit {
  public title;

  constructor() {
    this.title = 'This is the Store';
  }

  ngOnInit() {
  }

}
