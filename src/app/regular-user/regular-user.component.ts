import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyData } from '../models/propertydata';
import { PropertyService } from '../property.service';
import { EscrowData, TaxStatusData } from '../models/taxStatusData';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-regular-user',
  templateUrl: './regular-user.component.html',
  styleUrls: ['./regular-user.component.css']
})

export class RegularUserComponent implements OnInit {

  constructor(private _service:PropertyService,private _router:Router,private fb:FormBuilder) { }

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
        sessionStorage.setItem('credentials', JSON.stringify(response));
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
  }
  


