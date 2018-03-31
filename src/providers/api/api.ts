import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  apiUrl = 'https://malvaceous-chihuahua-5816.dataplicity.io';

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  allUser(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/api/users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getUserId(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/api/users/id').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
