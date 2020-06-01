import { Component, OnInit, Inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-theme-bohoa',
  templateUrl: './theme-bohoa.component.html',
  styleUrls: ['./theme-bohoa.component.css']
})
export class ThemeBohoaComponent implements OnInit {
  public productByCategory:[];
  public result:any;
  public categoryID: number;
  public categoryName:"";
  public formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits:0
  })
  constructor(
    private _route:ActivatedRoute,
    http:HttpClient,
    @Inject('BASE_URL') baseUrl:string,
    private _router:Router) {
    //fetch data product from api 
   this.categoryID = +this._route.snapshot.params['id'];
    //console.log("categoryID: ",this.categoryID);
    http.post(`https://localhost:44323`+`/api/Products/get-products-by-category-id?id=${this.categoryID}`,null).subscribe(res=>{
      this.result=res;
      this.productByCategory=this.result.data;
      //console.log("product by cate :",this.productByCategory)
    },err=>console.log(err))
    http.post("https://localhost:44323"+"/api/Categories/get-all-categories",null).subscribe(res=>{
      let name:any=res;
      name.data.map((item)=>{item.categoryId===this.categoryID?this.categoryName=item.categoryName:""})
      console.log("name: ",this.categoryName)
    })

  }
  handleOnClickProduct=(idProduct)=>{
    console.log("themeIDProduct: ",idProduct)
    this._router.navigate(['/product-detail',idProduct])
  }
  ngOnInit() {
    //console.log("product by cate :",this.productByCategory)
  }

}
