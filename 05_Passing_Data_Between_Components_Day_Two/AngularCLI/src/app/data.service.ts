import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
@Injectable()
export class DataService {

private messageSource = new BehaviorSubject<string>("Start");
currentmessage=this.messageSource.asObservable();

  constructor() { }

  changemessage(message:string):void{
    this.messageSource.next(message);
  }

}
