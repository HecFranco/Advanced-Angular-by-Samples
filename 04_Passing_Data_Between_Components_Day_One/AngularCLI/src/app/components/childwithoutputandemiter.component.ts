import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childwithoutputandemiter',
  templateUrl: '../views/childwithoutputandemiter.component.html'
})
export class ChildwithoutputandemiterComponent implements OnInit {

  message: string;

  @Output('messagefromchid') emitmessage = new EventEmitter<string>();

  EmitValue(): void {
    this.emitmessage.emit(this.message)
  }

  constructor() {
    this.message = 'Hello from child';
  }

  ngOnInit() { }

}
