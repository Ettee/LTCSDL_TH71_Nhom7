import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {
  infoForm:FormGroup;
  public productID:number;
  public result:any;
  public buyProduct:[];
  orderDate:string;
  amount:any=1;
  public formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits:0
  })
  constructor(private http:HttpClient,
  @Inject('BASE_URL') baseUrl:string,
  private _router:Router
  ) {
    this.productID=JSON.parse(localStorage.getItem("lstCart"));
    //console.log("lstCartGet: ",this.productID)
    http.post(`https://localhost:44323`+`/api/Products/get-product-by-id?id=${this.productID}`,null).subscribe(res=>{
      this.result=res;
      //console.log('result: ',this.result);
      this.buyProduct=this.result.data;
      //console.log("buyProduct: ",this.buyProduct)
    },err=>console.log(err))
    
  }

  ngOnInit(): void {
    this.infoForm = new FormGroup({
      hoTen:new FormControl("",[Validators.required]),
      diaChi:new FormControl("",[Validators.required]),
      soDT:new FormControl("",[Validators.required,Validators.pattern("^[0-9]+$")]),
      email:new FormControl("",[
        Validators.required,
        Validators.email
      ])
    })
  }
  handleSubmit=()=>{
    if(this.infoForm.invalid){
      this.infoForm.markAllAsTouched();
      alert("Khách hàng chưa hoàn thành form đặt mua")
      return
    }
    let time= new Date();
    //this.orderDate=`${time.getFullYear()}-${time.getMonth()+1}-${time.getDate()}`;
    
    const thongTinDatHang={
      productID:this.productID,
      companyName:this.infoForm.get("hoTen").value,
      email:this.infoForm.get("email").value,
      address:this.infoForm.get("diaChi").value,
      amount: parseInt(this.amount),
      phone:this.infoForm.get("soDT").value,
      orderDate:time
    };
    
    // console.log(thongTinDatHang);
    // console.log("time: ",time)
     this.http.post("https://localhost:44323/api/Order/create-order",
     thongTinDatHang)
     .subscribe(
       res=>{
        console.log("good: ",res)
        alert("Đặt hàng thành công !Nhấn OK để tiếp tục mua sắm")
        this._router.navigate(['/'])
       },
       err=>{
        console.log("bad: ",err)
      }
    );
  }
}
