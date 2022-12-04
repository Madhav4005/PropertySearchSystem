import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private _router:Router) { }
  
  BASE_URL="http://localhost:8880/api/v1/auth/"
  signin(user:{username:string;password:string;}) {
    return this.http.post(this.BASE_URL+'signin',user);
  }
  signup(data:any){return this.http.post(this.BASE_URL+'signup',data);}
 
    
  
loggedIn()
{
  return !!sessionStorage.getItem('credentials')
}
  logOutUser()
  {
    localStorage.removeItem('token')
    sessionStorage.removeItem('credentials')
    this._router.navigate(['./login'])
  }
  success()
{
  return "success"
}
}
