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
  lstOrder:any;
  page:number=1;
  lstCate:any;
  kw:"";
  IsNothingToShow:boolean=false;
  products:any={
    data:[],
    page: 0,
    size: 5,
    totalPages: 0,
    totalRecord: 0,
  };
  product ={
    productId: 0,
    categoryId: "",
    productName: "",
    price:"0",
    productImg:""
  };
  orderDetail={
    orderID:0,
    companyName:"",
    productName:"",
    amount:0,
    price:0,
    address:"",
    email:"",
    phone:""
  };
  newProduct={
    productId:0,
    categoryId:"",
    productName:"",
    price:"",
    productImg:""
  }
  newCategory={
    categoryName:"",
    cateImg:""
  }

  constructor(
    private http:HttpClient,
    @Inject('BASE_URL') baseUrl:string,
    private _router:Router) {
      this.searchProduct(1);
      this.getCategories();
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
        //console.log(this.products)
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
      let kw:String="";
      //console.log(this.kw)
      if(this.kw){
        kw=this.kw;
      }
      //console.log("kw: ",kw)
      let x ={
        page:nextPage,
        size:5,
        keyword:kw
      };
      //console.log("page: ",x)
      this.http.post('https://localhost:44323' + '/api/Products/search-products', x).subscribe(result => {
        this.products = result;
        this.products = this.products.data;
        //console.log(this.products);
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
      let kw:String="";
      if(this.kw){
        kw=this.kw;
      }
      //console.log("kw: ",kw)
      let x ={
        page:nextPage,
        size:5,
        keyword:kw
      };
      this.http.post('https://localhost:44323' + '/api/Products/search-products', x).subscribe(result => {
        this.products = result;
        this.products = this.products.data;
        //console.log(this.products);
      }, error => console.error(error));
    }
    else
    {
      alert("Bạn đang ở trang đầu");
    }
  }
  openMoDalOrderDetail(orderID){
    let result:any;
    this.http.post(`https://localhost:44323/api/OrderDetail/get-order-detail-with-cust-info?orderID=${orderID}`,null).subscribe(res=>{
      result=res;
      this.orderDetail = {
        orderID: result.orderID,
        companyName: result.companyName,
        productName: result.productName,
        amount: result.amount,
        price: result.price,
        address:result.address,
        email: result.email,
        phone: result.phone,
      };
      //console.log(this.orderDetail)
    },err=>{
      console.log(err)
    })
    
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
      categoryId: parseInt( this.product.categoryId),
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
      alert("Đã xảy ra lỗi khi cập nhật sản phẩm.Thử lại sau.");
    });
  }
  getOrderList(page){
    this.http.post(`https://localhost:44323/api/Order/fetch-order-for-admin?page=${page}&size=5`,null).subscribe(res=>{
      this.lstOrder=res;
      //console.log(this.lstOrder)
    })
  }
  nextOrderLst(){
    this.page+=1;
    this.getOrderList(this.page);
    //console.log(this.lstOrder)
    if(this.lstOrder.length===0){
      alert("Bạn đang ở trang cuối.")
      this.page-=1;
      this.getOrderList(this.page);
    }
  }
  preOrderLst(){
    this.page-=1;
    if(this.page<1){
      alert("Bạn đang ở trang đầu.")
      this.page+=1;
    }else{
      this.getOrderList(this.page);
    }
  }
  addProduct=()=>{
    let product={
      productId:this.newProduct.productId,
      categoryId:parseInt(this.newProduct.categoryId),
      productName:this.newProduct.productName,
      price:parseInt(this.newProduct.price),
      productImg:this.newProduct.productImg
    };
    this.http.post("https://localhost:44323/"+"api/Products/create-product",product).subscribe(
      ()=>{
        alert("Thêm sản phẩm thành công.")
      },()=>{
        console.log(product)
        alert("Đã xảy ra lỗi khi thêm sản phẩm.Thử lại sau.")
      }
    )
    
  }
  getCategories=()=>{
    this.http.post("https://localhost:44323/api/Categories/get-all-categories",null).subscribe(res=>{
      this.lstCate=res;
      //console.log(this.lstCate)
    },
    (err)=>{
      console.log(err)
    })
  }
  handleOnClickAddCateTab=()=>{
    let cate:any;
    cate={
      categoryName:this.newCategory.categoryName,
      cateImg:this.newCategory.cateImg
    }
    
    this.http.post("https://localhost:44323/api/Categories/create-categories",cate).subscribe(()=>{
      alert("Thêm ngành hàng thành công");
      //console.log(cate);
    },(err)=>{
      alert("Thêm ngành hàng thất bại.Hãy thử lại sau.");
      console.log(err);
      console.log(cate);
    })
  }
  handleSearchProduct=(kw)=>{
    let objSearch={
      page:1,
      size:5,
      keyword:kw
    }
    this.kw=kw;
    
    this.http.post("https://localhost:44323/api/Products/search-products",objSearch).subscribe(res=>{
      var result:any=res;
      if(result.data.data.length<1){
        this.IsNothingToShow=true;
      }else{
        this.IsNothingToShow=false;
      }
      
      this.products=result.data;

    },err=>{console.log(err)})
    
  }
  handleDeleteProduct=(id)=>{
    this.http.post(`https://localhost:44323/api/Products/delete-product?id=${id}`,null).subscribe(()=>{
      alert("Xóa sản phẩm thành công")
    },err=>{
      console.log(err)
      alert("Đã xảy ra lỗi khi xóa sản phẩm.Thử lại sau.")
    })
  }
  ngOnInit() {
  }

}
