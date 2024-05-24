import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromiseApiService {

  constructor() { }

  async register(url:String,email:string,password:string,returnSecureToken:boolean):Promise<any>{
    try{
      const body = {
        email: email,
        password: password,
        returnSecureToken
      };
      
      const response = await fetch(
          url as string,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
          
            body:JSON.stringify(body)
          }
        );
        // console.log("lol2",response.json());
        const data = await response.json();
        return data;
    }catch(err){
      console.log("error from promise api service ",err);
      throw err;
    }
  }
}
