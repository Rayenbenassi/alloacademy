import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  registerform!:FormGroup
clicker:boolean = false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registerform=this.fb.group(
      {
        email:["",Validators.required],
        firstName:["",Validators.required],
        lastName:["",Validators.required],
        birthday:["",Validators.required],
        class:["",Validators.required],
        password:["",Validators.required],
        ConfirmPassword:["",Validators.required],
      },
      {
        Validators:this.controlValuesAreEqual('password','ConfirmPassword')
      }
    )
  }

 


  private controlValuesAreEqual(controlNameA : string,controlNameB:string): ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null =>{
      const formgroup=control as FormGroup
      const  valueOfControlA = formgroup.get('controlNameA')?.value
      const  valueOfControlB = formgroup.get('controlNameB')?.value

      if(valueOfControlA === valueOfControlB){
        return null
      }
      else{
        return {valuesDoNotMatch:true}
      }
    }


  }
  get f (){return this.registerform.controls}
  OnSubmitForm(){
    this.clicker=true;
    console.log(this.registerform)
  }

}





