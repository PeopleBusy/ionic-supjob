import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

let apiUrl = "http://51.15.241.241/";

@Injectable()
export class RegisterProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RegisterProvider Provider');
  }

  postData(credentials, type){
    return new Promise((resolve, reject) =>{
        let headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
        this.http.post(apiUrl + type, JSON.stringify(credentials), {headers: headers})
        .subscribe((res) =>{
            resolve(res);
        }, (err) => {
          reject(err);
        })
    });
  }

}
