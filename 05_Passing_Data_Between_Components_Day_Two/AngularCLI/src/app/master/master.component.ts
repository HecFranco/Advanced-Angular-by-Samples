import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  
  sendgreetingtochild:string="Data from Parent to child using input decorator";
  constructor() { }

  ngOnInit() {
  }

}
