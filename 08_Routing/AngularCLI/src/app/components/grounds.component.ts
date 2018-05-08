import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grounds',
  templateUrl: '../views/grounds.component.html',
  styleUrls: ['../styles/grounds.component.scss']
})
export class GroundsComponent implements OnChanges, OnInit, DoCheck, OnDestroy {  
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

  ngOnInit(){
    console.log('OnInit Method launch');
  }

  ngDoCheck(){
    console.log('DoCheck Method launch');
  }

  ngOnDestroy(){
    console.log('OnDestroy Method launch');
  }

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
