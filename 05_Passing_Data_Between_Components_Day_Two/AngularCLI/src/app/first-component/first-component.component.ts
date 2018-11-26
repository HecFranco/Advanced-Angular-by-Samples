import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  message:string="";

  constructor(private data:DataService) {


   }

  ngOnInit() {
    
    this.data.currentmessage.subscribe(message=>this.message=message);
  }

}
