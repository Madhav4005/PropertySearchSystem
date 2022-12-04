
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class RegisterData{
    username:string='';
    password:string='';
    firstname:string='';
    lastname:string='';
    role:string='';
    email:string='';
    

    public formUserGroup:FormGroup;
    constructor(){
    var _builder=new FormBuilder();
    this.formUserGroup=_builder.group({
        //EmailControl:new FormControl('',Validators.compose([Validators.required])),
        UsernameControl:new FormControl('',Validators.compose([Validators.required])),
        UserPasswordControl:new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/)])),
        RoleControl:new FormControl('',Validators.compose([Validators.required])),
        firstNameControl:new FormControl('',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])),
        lastNameControl:new FormControl('',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(20)])),
        EmailControl:new FormControl('',Validators.compose([Validators.required,Validators.email])),
    });
    }
}