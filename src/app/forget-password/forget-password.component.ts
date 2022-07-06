import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetpassword!:FormGroup
  clicker:boolean = false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.forgetpassword=this.fb.group({
      email:["",Validators.required],
    })
  }
  get f (){return this.forgetpassword.controls}

  OnSubmitForm(){
    this.clicker=true;
    
  }


}
