import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PropertySearchUI';
  constructor(private _userService : UserService){}
  ngOnInit(): void {
  }
  LoggedIn(Input:boolean):boolean{    
    if(Input){
      return this._userService.loggedIn();
    }
    else{
      return !this._userService.loggedIn();
    }
  }
  Logout(){
    this._userService.logOutUser();
  }
}
