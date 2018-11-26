import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';

@Component({
  selector: 'app-secondcomponent',
  templateUrl: './secondcomponent.component.html',
  styleUrls: ['./secondcomponent.component.css']
})
export class SecondcomponentComponent implements OnInit {

  childmessage:string=""
counter:number=0;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.currentmessage.subscribe(Message=>this.childmessage=Message);
  }
  newmessage():void{
    this.data.changemessage("changing counter from sibling " + this.counter++);
  }

}
