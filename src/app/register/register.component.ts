import { Component, OnInit } from '@angular/core';
import CustomerService from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  customer = {
    id:0,
    name:'',
    password:'',
    address:'',
    email:'',
    phone:'',
    
  };

  constructor(private router: Router,private customerService: CustomerService) { }

  ngOnInit() {}

  addCustomer(){
    this.customerService.addRemoteCustomer(this.customer)
  .subscribe(()=>this.router.navigate(['./list-movies']));
  }

}
