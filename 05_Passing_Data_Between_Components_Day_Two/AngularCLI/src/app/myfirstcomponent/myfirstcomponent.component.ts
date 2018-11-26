import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myfirstcomponent',
  templateUrl: './myfirstcomponent.component.html',
  styleUrls: ['./myfirstcomponent.component.css']
})
export class MyfirstcomponentComponent implements OnInit {
name:string="John Doe";
constructor() { }

  ngOnInit() {
  }

}
