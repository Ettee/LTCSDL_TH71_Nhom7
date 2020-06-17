import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
  public kw:String="";
  lstProduct:[];
  public hasData:boolean=true;
  public formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits:0
  })
  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private http:HttpClient,
    @Inject('BASE_URL')baseUrl:String
  ) 
  {
    this.kw=this._route.snapshot.params['kw'];
    let x={
      page:1,
      size:100,
      keyword:this.kw
    }
    this.http.post(`https://localhost:44323/api/Products/search-products`,x).subscribe(res=>{
      let result:any=res;
      this.lstProduct=result.data.data;
      console.log(this.lstProduct)
      if(this.lstProduct.length>0){
        this.hasData=true;
        console.log("dudeeeee")
      }
      else{
        this.hasData=false;
        console.log("wtf")
      }
      console.log(this.hasData)
    },err=>{
      console.log(err)
      alert("Đã xảy ra lỗi khi tìm kiếm sản phẩm.Hãy quay lại trang chủ.")
    })
  }
  handleClickProduct=(idProduct)=>{
    console.log(idProduct)
    this._router.navigate(['/product-detail',idProduct])
  }
  ngOnInit() {
  }

}
