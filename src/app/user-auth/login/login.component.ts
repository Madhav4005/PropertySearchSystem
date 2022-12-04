import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { UserData } from 'src/app/models/userdata';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    username:"",
    password:""
  }
  constructor(private userService :UserService,private router: Router) { }
  UserDataModel: UserData = new UserData();
  ngOnInit(): void {
  }
  signin(){
    var _userData = {
      username: this.UserDataModel.userName,
      password: this.UserDataModel.password
    };
    const observable:Observable<any>=this.userService.signin(_userData);
    observable.subscribe(
      (response:any)=>{ 
        console.log(response);
        sessionStorage.setItem('credentials', JSON.stringify(response));
       
        if(response.roles[0]=="ROLE_USER"){
          this.router.navigate(['user']);
        }
        else if(response.roles[0]=="ROLE_ADMIN"){
          this.router.navigate(['admin']);
        }
      },
      function(error){
        alert("Something went wrong")
      }
    
      )
  }
}
