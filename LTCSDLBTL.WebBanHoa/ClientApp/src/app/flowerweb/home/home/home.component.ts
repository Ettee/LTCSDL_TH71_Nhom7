import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public categories:[];
  public lstNgayCuaMe:[];
  public lstPhuNuVietNam:[];
  public formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits:0
  })
  public result:any;
  constructor(
    http:HttpClient,
    @Inject('BASE_URL') baseUrl:string,
    private _router:Router) {
    //Xem theo chủ đề
    http.post('https://localhost:44323'+'/api/Categories/get-all-categories',null).subscribe(res=>{
      this.result=res;
      this.categories=this.result.data;
    },err=>console.log(err));
    //-------Các section xem hoa----------
    //Ngay Cua Me
    http.post('https://localhost:44323' +'/api/Products/get-products-by-category-id?id=3',null).subscribe(res=>{
      this.result=res;
      this.lstNgayCuaMe=this.result.data;
    },err=>console.log(err))
    //Phu Nu Viet Nam
    http.post('https://localhost:44323' +'/api/Products/get-products-by-category-id?id=4',null).subscribe(res=>{
      this.result=res;
      this.lstPhuNuVietNam=this.result.data;
    },err=>console.log(err))

  }
  handleOnClickTheme=(id)=>{
    //console.log(id);
    this._router.navigate(['/flower-by-theme/theme',id])
  }
  ngOnInit() {
  }

}
