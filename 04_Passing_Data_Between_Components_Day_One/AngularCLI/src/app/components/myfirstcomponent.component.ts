import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myfirstcomponent',
  templateUrl: '../views/myfirstcomponent.component.html'
})
export class MyfirstcomponentComponent implements OnInit {
  name: string;

  constructor() {
    this.name = 'John Doe';
  }

  ngOnInit() { }

}
