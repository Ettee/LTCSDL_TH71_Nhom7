import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ThemeBohoaComponent} from './theme-bohoa/theme-bohoa.component';
import {ThemeGioHophoaComponent} from './theme-gio-hophoa/theme-gio-hophoa.component';
import {ThemeLangmangComponent} from './theme-langmang/theme-langmang.component';
import {ThemeSinhnhatComponent} from './theme-sinhnhat/theme-sinhnhat.component';


const routes:Routes=[
  {
    path:"sinhnhat",component:ThemeSinhnhatComponent
  },
  {
    path:"bohoa",component:ThemeBohoaComponent
  },
  {
    path:"langmang",component:ThemeLangmangComponent
  },
  {
    path:"giohoa-hophoa",component:ThemeGioHophoaComponent
  }
]
@NgModule({
  declarations: [
    ThemeBohoaComponent,
    ThemeGioHophoaComponent,
    ThemeLangmangComponent,
    ThemeSinhnhatComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    ThemeBohoaComponent,
    ThemeGioHophoaComponent,
    ThemeLangmangComponent,
    ThemeSinhnhatComponent]
})
export class CategoriesFlowerModule { }
