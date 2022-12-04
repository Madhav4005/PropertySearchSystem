import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyData } from '../models/propertydata';
import { PropertyService } from '../property.service';
import { EscrowData, TaxStatusData } from '../models/taxStatusData';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _service:PropertyService,private _router:Router,private fb:FormBuilder) { }

  div1:boolean=false;
    div2:boolean=false;
    div3:boolean=false;

    div1Function(){
        this.div1=true;
        this.div2=false;
        this.div3=false
    }

    div2Function(){
        this.div2=true;
        this.div1=false;
        this.div3=false
    }

    div3Function(){
        this.div3=true;
        this.div2=false;
        this.div1=false
    }
    
    PropertyDataModel: PropertyData = new PropertyData();
    taxDrop: TaxStatusData [] = [
      {taxStatusId : 1, taxStatusName : "PAID"},
      {taxStatusId : 2, taxStatusName : "NON-PAID"}
    ]

    escrowStatus: EscrowData []=[
      {EscrowId : 1, EscrowName : "ESCROW"},
      {EscrowId : 2, EscrowName : "NON-ESCROW"}
    ]
    
  uiResponse : any;
  showTable: boolean =false;
  totalLength:any;
  page:number = 1;
  ngOnInit(): void {
  }
searchProperty(){
    debugger;
    var _search = {
      propertyAddress:this.PropertyDataModel.propertyAddress,
        propertyType:this.PropertyDataModel.propertyType,
      ownerFirstName:this.PropertyDataModel.ownerFirstName,
      ownerLastName:this.PropertyDataModel.ownerLastName
    };
 

    const observable:Observable<any>=this._service.searchProperty(_search);
    observable.subscribe(
      (response:any)=>{
        console.log(response);
        //sessionStorage.setItem('credentials', JSON.stringify(response));
        if(response.length==0){
          alert("No Result found for this combination.Kindly select the proper combination");
        }
        this.uiResponse=response;
        this.showTable=true;
        this.totalLength =response.length;
        //this.router.navigate(['']);
      },
      function(error){
        //alert("Something went wrong")
        alert(error.message);
      }
    
      )
    
  }

  addProperty(){
    debugger;
    var _registerData = {
      property:{propertyAddress:this.PropertyDataModel.propertyAddress,
        legalDescription:this.PropertyDataModel.legalDescription,
        area:this.PropertyDataModel.area,
        plotNo:this.PropertyDataModel.plotNo,
        propertyType:this.PropertyDataModel.propertyType,
        rate :this.PropertyDataModel.rate,
        },
        tax:{ escrowDetail:this.PropertyDataModel.escrowDetail,
          taxRate:this.PropertyDataModel.taxRate,
          taxAmount:this.PropertyDataModel.taxAmount,
          taxStatus:this.PropertyDataModel.taxStatus},

      ownerFirstName:this.PropertyDataModel.ownerFirstName,
      ownerLastName:this.PropertyDataModel.ownerLastName,
     // role:this.PropertyDataModel.role;
      ownerEmail:this.PropertyDataModel.ownerEmail,
    };
    const observable:Observable<any>=this._service.addProperty(_registerData);
    observable.subscribe(
      (response:any)=>{
        console.log(response);
        //sessionStorage.setItem('credentials', JSON.stringify(response));
        if(response.httpStatus=="CREATED"){
          alert("Property details added successfully");
        }
        //this.router.navigate(['']);
      },
      function(error){
        //alert("Something went wrong")
        alert(error.message);
      }
    
      )
  //   this._service.addProperty(_registerData).subscribe(res=>{
  //     //localStorage.setItem('token',res.token);
      
  //     //

  //  console.log(res);
  //     debugger;
  //     // if(res=="CREATED"){
  //     //   this.router.navigate(['author']);
  //     // }
  //     // else if(response.roles[0]=="ROLE_READER"){
  //     //   this.router.navigate(['reader']);
  //     // }
     
  //   },res=>console.log(res));
   }

   deleteProperty(prop_id :any){
    debugger;
    
    const observable:Observable<any>=this._service.deleteProperty(prop_id);
    observable.subscribe(
      (response:any)=>{
        console.log(response);
        //sessionStorage.setItem('credentials', JSON.stringify(response));
        if(response.httpStatus=="OK"){
          alert("Property details deleted successfully");
        }
        //this.router.navigate(['']);
      },
      function(error){
        //alert("Something went wrong")
        alert(error.message);
      }
    
      )
 
   }

  
}
