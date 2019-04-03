import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class CustomerService {
  private customerUrl = 'http://192.168.0.34:3000/api/customers';
  constructor(private http: HttpClient) {
    var defaultCustomers = [
    
    ];

    if(localStorage.getItem('customers')==null){
      this.customers = defaultCustomers;
      this.setLocalStorageCustomers(this.customers);
    }else{
      this.getLocalStorageCustomers();
    }
   }
    customers= [];

getLocalStorageCustomers(){
  this.customers = JSON.parse(localStorage.getItem('customers'));
}
setLocalStorageCustomers(list){
  localStorage.setItem('customers', JSON.stringify(list));
}

 getRemoteCustomers(): Observable<[]>{
    return this.http.get<[]>(this.customerUrl);     
 }
 deleteRemoteCustomer(customer){
    return this.http.delete(this.customerUrl+'/'+customer.id);     
 }

 addRemoteCustomer(customer): Observable<any>{
    return this.http.post(this.customerUrl, customer);     
 }

  updateRemoteCustomer(customer):Observable<any>{
    return this.http.put(this.customerUrl + "/"+customer.id,customer);
 }
  
  updateRemotePassword(customer):Observable<any>{
  return this.http.put(this.customerUrl, customer);
}

  getRemoteCustomerById(id):Observable<any>{
   return this.http.get<[]>(this.customerUrl + "/"+id);
 }  
}
