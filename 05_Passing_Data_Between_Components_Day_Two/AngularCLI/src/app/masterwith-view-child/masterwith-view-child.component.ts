import { Component, OnInit,ViewChild } from '@angular/core';
import{ChildwithViewChildComponent} from '../childwith-view-child/childwith-view-child.component'
@Component({
  selector: 'app-masterwith-view-child',
  templateUrl: './masterwith-view-child.component.html',
  styleUrls: ['./masterwith-view-child.component.css']
})
export class MasterwithViewChildComponent implements OnInit {

  @ViewChild(ChildwithViewChildComponent)

private childcomponent : ChildwithViewChildComponent;

Increase():void{
  this.childcomponent.IncreaseNumber();
}

Dicrease():void{
  this.childcomponent.counter--;
}
constructor() { }

  ngOnInit() {
  }

}
