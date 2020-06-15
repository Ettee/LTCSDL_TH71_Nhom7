import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  private _id:number;
  private _isAdmin :boolean=false;
  constructor(
    private _router:Router,
    private _route :ActivatedRoute,location: Location){
    _router.events.subscribe(()=>{
      if(location.path().includes("admin")){
        this._isAdmin=true;
      }else{
        this._isAdmin=false;
      }
      //console.log("isAdmin: ",this._isAdmin)
    })
  }
  ngOnInit(){
    
    
  }
  
  handleOnClickLink=(id)=>{
    
    //console.log(this._router)
    this._router.navigate(['/flower-by-theme/theme',id])
    
  }

}
