import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponentComponent } from './search-component/search-component.component';
import { Routes, RouterModule } from '@angular/router';
const routes:Routes=[
  {
    path:"",component:SearchComponentComponent
  }
]

@NgModule({
  declarations: [SearchComponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[SearchComponentComponent]
})
export class SearchPageModule { }
