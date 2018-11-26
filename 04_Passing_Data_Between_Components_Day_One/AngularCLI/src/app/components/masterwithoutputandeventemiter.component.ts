import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masterwithoutputandeventemiter',
  templateUrl: '../views/masterwithoutputandeventemiter.component.html'
})
export class MasterwithoutputandeventemiterComponent implements OnInit {

  GreetingsFromChild: string ;

  receivemessage($event): string {
    this.GreetingsFromChild = $event;
    return this.GreetingsFromChild;
  }

  constructor() {
    this.GreetingsFromChild = 'Initial message at the master.';
   }

  ngOnInit() { }

}
