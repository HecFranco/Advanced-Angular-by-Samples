import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './components/store.component';
import { GroundsComponent } from './components/grounds.component';

const routes: Routes = [
  { path:'', component: StoreComponent },
  { path:'', redirecTo: 'store', pathMatch: 'full' },
  { path:'store', component: StoreComponent },
  { path:'**', component: StoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
