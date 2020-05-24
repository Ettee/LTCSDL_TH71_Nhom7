import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {
  public productID:number;
  public result:any;
  public buyProduct:[];
  public formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits:0
  })
  constructor(http:HttpClient,
  @Inject('BASE_URL') baseUrl:string) {
    this.productID=JSON.parse(localStorage.getItem("lstCart"));
    //console.log("lstCartGet: ",this.productID)
    http.post(`https://localhost:44323`+`/api/Products/get-product-by-id?id=${this.productID}`,null).subscribe(res=>{
      this.result=res;
      //console.log('result: ',this.result);
      this.buyProduct=this.result.data;
      console.log("buyProduct: ",this.buyProduct)
    },err=>console.log(err))
    
  }

  ngOnInit() {
  }

  datHangThanhCong(e){
    alert('Đặt hàng thành công');
    e.preventDefault();
  }
}
