import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grounds',
  templateUrl: '../views/grounds.component.html',
  styleUrls: ['../styles/grounds.component.scss']
})
export class GroundsComponent implements OnInit {
  public title: string;
  public surface: number;
  public typeOfVegetation: string;
  public open: boolean;

  constructor() { 
    this.title = 'This is the Park';
    this.surface = 200;
    this.typeOfVegetation = 'High';
    this.open = true;
  }

  ngOnInit() {
  }

}
