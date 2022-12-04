import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class UserData{
    userName:string='';
    password:string='';
    fullName:string='';
    roleCategory:string='';

    public formUserGroup:FormGroup;
    constructor(){
    var _builder=new FormBuilder();
    this.formUserGroup=_builder.group({
        UsernameControl:new FormControl('',Validators.compose([Validators.required])),
        UserPasswordControl:new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/)]))
           
    });
    }
}