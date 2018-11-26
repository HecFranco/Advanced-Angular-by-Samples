import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: '../views/master.component.html'
})
export class MasterComponent implements OnInit {

  sendgreetingtochild: string;

  constructor() {
    this.sendgreetingtochild = 'Data from Parent to child using input decorator';
  }

  ngOnInit() { }

}
