import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CustomersApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CustomersApiProvider {

  private baseUrl = 'https://angular6-features.firebaseio.com/customers.json';

  constructor(public http: HttpClient) {
    console.log('Hello CustomersApiProvider Provider');
  }

  getCustomers(): any {
    return this.http.get(`${this.baseUrl}`);
  }

}
