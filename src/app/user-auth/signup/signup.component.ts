import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterData } from 'src/app/models/registerdata';
import { RoleData } from 'src/app/models/roledata';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={
    username:"ankita",
    password:"1234$",
    email:"aa@gmail.com",
    role:[ "" ]
  }
  submitted=false;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  roleDetails : RoleData[] = [
    {roleId : 1, roleName : "ROLE_ADMIN"},
    {roleId : 2, roleName : "ROLE_USER"}
  ];
  constructor(private userservice:UserService,private router:Router,private fb:FormBuilder) { 
    this.signup();
  }
  RegisterDataModel: RegisterData = new RegisterData();
  ngOnInit(): void {
  }

signup(){
  var _registerData = {
    username: this.RegisterDataModel.username,
    password: this.RegisterDataModel.password,
    email:this.RegisterDataModel.email,
    firstname:this.RegisterDataModel.firstname,
    lastname:this.RegisterDataModel.lastname,
    role:[this.RegisterDataModel.role]
  };
  this.submitted=true;
  const observable:Observable<any>=this.userservice.signup(_registerData);
  observable.subscribe(
    (response:any)=>{
      console.log(response);
    },
    function(error){
      console.log("SignUp fails"+error);
    },
    ()=>{this.router.navigate(['login']);
  }
  )
}
}