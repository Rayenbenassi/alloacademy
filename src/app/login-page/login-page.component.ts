import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
loginform!:FormGroup
clicker:boolean = false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginform=this.fb.group(
      {
        email:["",Validators.required],
        password:["",Validators.required]
      }
    )
  }

 get f (){return this.loginform.controls}
  OnSubmitForm(){
    this.clicker=true;
    console.log(this.loginform)
  }

}
