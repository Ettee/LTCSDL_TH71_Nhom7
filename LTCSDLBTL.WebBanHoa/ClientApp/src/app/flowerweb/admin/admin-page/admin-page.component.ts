import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
declare var $: any 
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  size :number=5;
  products:any={
    data:[],
    page: 0,
    size: 5,
    totalPages: 0,
    totalRecord: 0,
  };
  
  product ={
    productId: 0,
    categoryId: 0,
    productName: "",
    price:"0",
    productImg:""
  };
  constructor(
    private http:HttpClient,
    @Inject('BASE_URL') baseUrl:string,
    private _router:Router) {
      this.searchProduct(1);
    }
  searchProduct(cPage){
    let x ={
      page:cPage,
      size: this.size,
      keyword:""
    };
    this.http.post('https://localhost:44323' + '/api/Products/search-products', x).subscribe(result => {
      var res: any = result;
      if(res.success)
      {
        this.products = res.data;
        console.log(this.products)
      }
      else {
        alert(res.message);
      }
    }, error => {
      console.error(error)
      alert(error);
    });
  }
  searchNext()
  {
    if( this.products.page < this.products.totalPages)
    {
      let nextPage = this.products.page + 1;
      let x ={
        page:nextPage,
        size:5,
        keyword:""
      };
      this.http.post('https://localhost:44323' + '/api/Products/search-products', x).subscribe(result => {
        this.products = result;
        this.products = this.products.data;
        console.log(this.products);
      }, error => console.error(error));
    }
    else
    {
      alert("Bạn đang ở trang cuối");
    }
  }
  searchPrevious()
  {
    if( this.products.page > 1)
    {
      let nextPage = this.products.page - 1;
      let x ={
        page:nextPage,
        size:5,
        keyword:""
      };
      this.http.post('https://localhost:44323' + '/api/Products/search-products', x).subscribe(result => {
        this.products = result;
        this.products = this.products.data;
        console.log(this.products);
      }, error => console.error(error));
    }
    else
    {
      alert("Bạn đang ở trang đầu");
    }
  }
  openModal(index)
  {
    var item = this.products.data[index];
    this.product = {
      productId: item.productId,
      productName: item.productName,
      categoryId: item.categoryId,
      price: item.price,
      productImg: item.productImg,
    };

    $("#modalProduct").modal("show");
  }
  saveProduct()
  {
    var x = {
      productId: this.product.productId,
      productName: this.product.productName,
      categoryId: this.product.categoryId,
      price:parseInt(this.product.price),
      productImg:this.product.productImg
    };
    this.http.post('https://localhost:44323/' + 'api/Products/update-product', x).subscribe(result => {
      var res: any = result;
      if(res.success)
      {
        this.products = res.data;
        this.searchProduct(1);
        alert("A product has been updated successfully");
      }
      else {
        alert(res.message);
      }
    }, error => {
      console.error(error)
      console.log(x)
      alert(error);
    });
  }
  ngOnInit() {
  }

}
