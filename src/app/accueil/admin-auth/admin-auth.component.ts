import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {

  constructor(private rout:Router) { }
exst:boolean=true;
userA:string="";
passwordA:string="";

userAdmin:string="walid";
passAdmin:string="walid123"

  ngOnInit(): void {
  }

onsubmit(f:NgForm){



}

click(){
  if(this.userA==this.userAdmin && this.passwordA==this.passAdmin){
    this.rout.navigate(['/adminP']);
    }
    else this.exst=false; 
}

}
