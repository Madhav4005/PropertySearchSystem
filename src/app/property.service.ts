import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  

  constructor(private http:HttpClient, private _router:Router) { }
  
  BASE_URL="http://localhost:8880/propertysystem/"

  searchProperty(searchProperty:any){
    let params = new HttpParams();

   params = params.append("ownerFirstName",searchProperty.ownerFirstName),

   params = params.append("ownerLastName",searchProperty.ownerLastName),

   params = params.append("propertyAddress",searchProperty.propertyAddress),

   params = params.append("propertyType",searchProperty.propertyType)

  return this.http.get(this.BASE_URL+'property',{params});
  
  }
  addProperty(addProperty:any) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials||'{}')['accessToken'];

    return this.http.post(this.BASE_URL+'property',addProperty , {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  deleteProperty(propertyId: any) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials||'{}')['accessToken'];

    return this.http.delete(this.BASE_URL+'property/'+propertyId, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  updateProperty(updateProperty:any,propertyId:any){
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials||'{}')['accessToken'];

    return this.http.put(this.BASE_URL+'propertyById',updateProperty, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  getPropertyById(propertyId:any)
  {
return this.http.get(this.BASE_URL+'admin/propertyById/'+propertyId);
  } 
  success()
{
  return "success"
}
}
