import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

const route:Routes=[
    {
        path:"",
        loadChildren: ()=>import('../app/flowerweb/home/home.module').then(m=>m.HomeModule)
    },
    {
        path:"product-detail/:idProduct",
        loadChildren:()=>import('../app/flowerweb/detail-flower/detail-flower.module').then(m=>m.DetailFlowerModule)
    },
    {
        path:"flower-by-theme",
        loadChildren:()=>import('../app/flowerweb/categories-flower/categories-flower.module').then(m=>m.CategoriesFlowerModule)
    },
    {
        path:"confirm-order",
        loadChildren:()=>import('../app/flowerweb/confirm-order/confirm-order.module').then(m=>m.ConfirmOrderModule)
    },
    {
        path:"admin",
        loadChildren:()=>import('../app/flowerweb/admin/admin.module').then(m=>m.AdminModule)
    },
    {
        path:"search/:kw",
        loadChildren:()=>import('../app/flowerweb/search-page/search-page.module').then(m=>m.SearchPageModule)
    }
];
@NgModule({
    imports:[CommonModule,RouterModule.forRoot(route)]
})
export class AppRouting{}