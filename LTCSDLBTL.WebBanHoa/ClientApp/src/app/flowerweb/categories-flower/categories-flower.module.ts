import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ThemeBohoaComponent} from './theme-bohoa/theme-bohoa.component';
import { FormsModule } from '@angular/forms';

const routes:Routes=[  
  {
    path:"theme/:id",component:ThemeBohoaComponent
  },
]
@NgModule({
  declarations: [
    ThemeBohoaComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),FormsModule
  ],
  exports:[
    ThemeBohoaComponent,
  ]
})
export class CategoriesFlowerModule { }
