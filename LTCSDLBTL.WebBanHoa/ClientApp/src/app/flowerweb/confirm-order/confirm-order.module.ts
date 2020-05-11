import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { Routes, RouterModule } from '@angular/router';


const routes:Routes=[
  {
    path:"",component:ConfirmOrderComponent
  }
]
@NgModule({
  declarations: [ConfirmOrderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ConfirmOrderModule { }
