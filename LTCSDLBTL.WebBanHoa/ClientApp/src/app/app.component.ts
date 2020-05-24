import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  private _id:number;
  
  constructor(
    private _router:Router,
    private _route :ActivatedRoute){
    
  }
  ngOnInit(){
    this._route.paramMap.subscribe(params=>{
      this._id=+params.get('id');
    })
  }
 
  handleOnClickLink=(id)=>{
    console.log("link clicked",this._id)
    console.log(this._router)
    this._router.navigate(['/flower-by-theme/theme',id])
    
  }

}
