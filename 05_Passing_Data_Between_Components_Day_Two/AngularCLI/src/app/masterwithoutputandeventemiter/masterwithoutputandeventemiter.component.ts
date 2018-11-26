import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masterwithoutputandeventemiter',
  templateUrl: './masterwithoutputandeventemiter.component.html',
  styleUrls: ['./masterwithoutputandeventemiter.component.css']
})
export class MasterwithoutputandeventemiterComponent implements OnInit {


  GreetingsFromChild:string ="Initial message at the master.";
 receivemessage($event):string
  {
this.GreetingsFromChild=$event;
return this.GreetingsFromChild;
  }

  constructor() { }

  ngOnInit() {
  }

}
