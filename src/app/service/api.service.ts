import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.url + 'api/';
  token: any;
  milkcard: any;
  order: any;
  subscription: any;

  // User functions

  userLogin(data) {
    return this.http.post(this.baseUrl + 'customerLogin', data, {});
  }

  listCustomerProductToken(data) {
    return this.http.post(this.baseUrl + 'listCustomerProductToken', data, {
      headers: {
        token: localStorage.getItem('token'),
      },
    });
  }

  customerMilkcard(data) {
    return this.http.post(this.baseUrl + 'customerMilkcard', data, {
      headers: {
        token: localStorage.getItem('token'),
      },
    });
  }

  listActiveSubscription(data) {
    return this.http.post(this.baseUrl + 'listActiveSubscription', data, {
      headers: {
        token: localStorage.getItem('token'),
      },
    });
  }

  listOrdersbyCustomer(data) {
    return this.http.post(this.baseUrl + 'listOrdersbyCustomer', data, {
      headers: {
        token: localStorage.getItem('token'),
      },
    });
  }

  editProfile(data) {
    return this.http.post(this.baseUrl + 'editCustomerDetails', data, {
      headers: {
        token: localStorage.getItem('token'),
      },
    });
  }

  viewCustomerDetails(data) {
    return this.http.post(this.baseUrl + 'viewCustomerDetails', data, {
      headers: {
        token: localStorage.getItem('token'),
      },
    });
  }
}
