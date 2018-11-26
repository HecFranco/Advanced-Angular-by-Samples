import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childwith-view-child',
  templateUrl: './childwith-view-child.component.html',
  styleUrls: ['./childwith-view-child.component.css']
})
export class ChildwithViewChildComponent implements OnInit {


counter :number=0;


IncreaseNumber():void{
  this.counter++;
}
  constructor() { }

  ngOnInit() {
  }

}
