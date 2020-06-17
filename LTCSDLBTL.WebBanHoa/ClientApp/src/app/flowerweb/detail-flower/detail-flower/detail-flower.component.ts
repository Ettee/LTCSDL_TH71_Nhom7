import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail-flower',
  templateUrl: './detail-flower.component.html',
  styleUrls: ['./detail-flower.component.css']
})
export class DetailFlowerComponent implements OnInit {
  public productID:number;
  public result:any;
  public lstProduct:[];
  public formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits:0
  })
  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    http:HttpClient,
    @Inject('BASE_URL') baseUrl:string)
    { 
      this.productID=+this._route.snapshot.params['idProduct'];
      http.post(`https://localhost:44323`+`/api/Products/get-product-by-id?id=${this.productID}`,null).subscribe(res=>{
        this.result=res;
        //console.log('result: ',this.result);
        this.lstProduct=this.result.data;
      },err=>console.log(err))
    }
  handleAddProduct=(id:number)=>{
    //console.log("add id: " ,id);
    localStorage.setItem("lstCart",JSON.stringify(id));
    setTimeout(()=>{
      this._router.navigate(['/confirm-order'])
    },1000)
  } 
  ngOnInit() {
    
  }
  

}
