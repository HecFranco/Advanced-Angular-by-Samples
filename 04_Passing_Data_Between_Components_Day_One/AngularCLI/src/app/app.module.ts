import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { MyfirstcomponentComponent } from './components/myfirstcomponent.component';
import { MasterComponent } from './components/master.component';
import { ChildComponent } from './components/child.component';
import { ChildwithoutputandemiterComponent } from './components/childwithoutputandemiter.component';
import { MasterwithoutputandeventemiterComponent } from './components/masterwithoutputandeventemiter.component';

@NgModule({
  declarations: [
    AppComponent,
    MyfirstcomponentComponent,
    MasterComponent,
    ChildComponent,
    ChildwithoutputandemiterComponent,
    MasterwithoutputandeventemiterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports:[AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
