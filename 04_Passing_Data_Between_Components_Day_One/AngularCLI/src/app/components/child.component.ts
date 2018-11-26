import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: '../views/child.component.html',
})
export class ChildComponent implements OnInit {

  @Input('bindingmessaage') message: string;

  constructor() { }
  ngOnInit() { }
}
