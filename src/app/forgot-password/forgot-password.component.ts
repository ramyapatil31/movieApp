import { Component, OnInit } from '@angular/core';
import CustomerService from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  customer = {
    id:0,
    name:'',
    password:'',
    address:'',
    email:'',
    phone:'', 
  };
  customers=[];

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.customerService.getRemoteCustomers().subscribe((result) => {this.customers = result;});
  }

  display(customer){
    for( var i=0; i<this.customers.length; i++){
      if(customer.email == this.customers[i].email){
        this.customerService.updateRemotePassword(this.customer).
        subscribe(()=>{this.router.navigate(['/login']);});
      }
    }
  }

}
