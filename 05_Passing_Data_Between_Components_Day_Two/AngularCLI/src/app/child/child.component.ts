import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit 
{
  @Input("bindingmessaage") message:string 
  constructor() { }
  ngOnInit() 
  {
    
  }
}
