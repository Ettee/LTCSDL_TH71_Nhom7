import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailFlowerComponent } from './detail-flower/detail-flower.component';
import { Routes, RouterModule } from '@angular/router';


const routes:Routes=[
  {
    path:"",component:DetailFlowerComponent
  }
]
@NgModule({
  declarations: [DetailFlowerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [DetailFlowerComponent]
})
export class DetailFlowerModule { }
