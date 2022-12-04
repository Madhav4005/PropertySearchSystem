import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';

//import module
import { UserAuthModule } from './user-auth/user-auth.module';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './user-auth/signup/signup.component';
import { LoginComponent } from './user-auth/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { SigninComponent } from './user-auth/signin/signin.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { RegularUserComponent } from './regular-user/regular-user.component'; 

const routes:Route []= [
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'admin', component:AdminComponent},
  {path:'login/signup', component:SignupComponent},
  {path:'admin/edit/:propertyId',component:EditPropertyComponent},
  {path:'edit/:propertyId',component:EditPropertyComponent},
  {path:'user', component:RegularUserComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EditPropertyComponent,
    RegularUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
