
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class PropertyData{
    ownerFirstName:string='';
    ownerLastName:string='';
    //role:string='[ "" ]';
    ownerEmail:string='';
    propertyAddress:string='';
    legalDescription:string='';
    area:number=0;
    plotNo:string='';
    propertyType:string='';
    rate :number=0;
    escrowDetail:string='';
    taxRate:number=0.0;
    taxAmount:number=0.0;
    taxStatus:string='';
    propertyId: any;
    ownerId: any;
    taxId: any;

    public formPropertyGroup:FormGroup;
  
    constructor(){
    var _builder=new FormBuilder();
    this.formPropertyGroup=_builder.group({
        EmailControl:new FormControl('',Validators.compose([Validators.required])),
        UsernameControl:new FormControl('',Validators.compose([Validators.required])),
        PropertyAddressControl:new FormControl('',Validators.compose([Validators.required])),
        PropertyAreaControl:new FormControl('',Validators.compose([Validators.required])),
        PropertyTypeControl:new FormControl('',Validators.compose([Validators.required])),
        LegalDescriptionControl:new FormControl('',Validators.compose([Validators.required])),
        plotNoControl:new FormControl('',Validators.compose([Validators.required])),
        PropertyRateControl:new FormControl('',Validators.compose([Validators.required])),
        EscrowDetailsControl:new FormControl('',Validators.compose([Validators.required])),
        TaxAmountControl:new FormControl('',Validators.compose([Validators.required])),
        TaxRateControl:new FormControl('',Validators.compose([Validators.required])),
        TaxStatusControl:new FormControl('',Validators.compose([Validators.required])),


        firstNameControl:new FormControl('',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])),
        lastNameControl:new FormControl('',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(20)]))
    });
    }
}