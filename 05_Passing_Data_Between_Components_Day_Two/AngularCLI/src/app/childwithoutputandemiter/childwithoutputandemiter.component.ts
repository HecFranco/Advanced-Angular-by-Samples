import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childwithoutputandemiter',
  templateUrl: './childwithoutputandemiter.component.html',
  styleUrls: ['./childwithoutputandemiter.component.css']
})
export class ChildwithoutputandemiterComponent implements OnInit 
{
    message:string="Hello from child"
    @Output("messagefromchid") emitmessage=new EventEmitter<string>();
   EmitValue():void{
    this.emitmessage.emit(this.message)
  }

  constructor() { }

  ngOnInit() {
  }

}
