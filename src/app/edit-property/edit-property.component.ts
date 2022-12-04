import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyData } from '../models/propertydata';
import { PropertyService } from '../property.service';
import { EscrowData, TaxStatusData } from '../models/taxStatusData';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { UserAuthModule } from '../user-auth/user-auth.module';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css']
})
export class EditPropertyComponent implements OnInit {
  propertyId: any;

  constructor(private _service:PropertyService,private _usermod:UserAuthModule,private _actiRoute:ActivatedRoute,private _router:Router,private fb:FormBuilder) { }
  PropertyDataModel: PropertyData = new PropertyData();
  taxDrop: TaxStatusData [] = [
    {taxStatusId : 1, taxStatusName : "PAID"},
    {taxStatusId : 2, taxStatusName : "NON-PAID"}
  ]

  escrowStatus: EscrowData []=[
    {EscrowId : 1, EscrowName : "ESCROW"},
    {EscrowId : 2, EscrowName : "NON-ESCROW"}
  ]
  ngOnInit(): void {
    console.log(this._actiRoute.snapshot.params['propertyId']);
  this._service.getPropertyById(this._actiRoute.snapshot.params['propertyId']).subscribe((result:any)=>{
    console.log(result);
    this.PropertyDataModel.ownerFirstName=result.owner[0].ownerFirstName;
    this.PropertyDataModel.area=result.area;
    this.PropertyDataModel.ownerLastName=result.owner[0].ownerLastName;
    this.PropertyDataModel.ownerEmail=result.owner[0].ownerEmail;
    this.PropertyDataModel.plotNo=result.plotNo;
    this.PropertyDataModel.propertyAddress=result.propertyAddress;
    this.PropertyDataModel.propertyType=result.propertyType;
    this.PropertyDataModel.legalDescription=result.legalDescription;
    this.PropertyDataModel.rate=result.rate;
    this.PropertyDataModel.escrowDetail=result.tax.escrowDetail;
    this.PropertyDataModel.taxAmount=result.tax.taxAmount;
    this.PropertyDataModel.taxRate=result.tax.taxRate;
    this.PropertyDataModel.taxStatus=result.tax.taxStatus;
    this.PropertyDataModel.propertyId=result.propertyId;
    this.PropertyDataModel.ownerId=result.owner[0].ownerId;
    this.PropertyDataModel.taxId=result.tax.taxId;
  })  

    
    // const observable:Observable<void>=this._service.getPropertyById(this._actiRoute.snapshot.params['propertyId']);
    // observable.subscribe(
    //   (response:any)=>{
    //     console.log(response);
    // )
  }
  updateProperty(){
    debugger;
    var _registerData = {
      property:{propertyAddress:this.PropertyDataModel.propertyAddress,
        legalDescription:this.PropertyDataModel.legalDescription,
        area:this.PropertyDataModel.area,
        plotNo:this.PropertyDataModel.plotNo,
        propertyType:this.PropertyDataModel.propertyType,
        rate :this.PropertyDataModel.rate,
        propertyId:this.PropertyDataModel.propertyId
        },
        tax:{ escrowDetail:this.PropertyDataModel.escrowDetail,
          taxRate:this.PropertyDataModel.taxRate,
          taxAmount:this.PropertyDataModel.taxAmount,
          taxStatus:this.PropertyDataModel.taxStatus,
          taxId:this.PropertyDataModel.taxId},

      ownerFirstName:this.PropertyDataModel.ownerFirstName,
      ownerLastName:this.PropertyDataModel.ownerLastName,
     // role:this.PropertyDataModel.role;
      ownerEmail:this.PropertyDataModel.ownerEmail,
      ownerId:this.PropertyDataModel.ownerId
    };
    const observable:Observable<any>=this._service.updateProperty(_registerData,this.propertyId);
    observable.subscribe
    (
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
  }

}
