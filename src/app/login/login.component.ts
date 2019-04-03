import { Component, OnInit } from '@angular/core';
import CustomerService from '../customer.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


constructor(private customerService: CustomerService, private router: Router, public alertController: AlertController) { }

customer:any = {};
ngOnInit() {
  this.customerService.getRemoteCustomers().subscribe((result) => {this.customers = result;});
}
  customers=[];
  doLogin(c){
    for( var i=0; i<this.customers.length; i++){
      if((c.email==this.customers[i].email) && (c.password==this.customers[i].password)){
        if(localStorage.getItem('user')==null){
          localStorage.setItem('user', JSON.stringify(c));
        }
        this.router.navigate(['/list-movies']);
        break;
      }
    }
  	
  }
  registerPage(){
    this.router.navigate(['/register']);
  }
  
  forgotPage(){
    this.router.navigate(['/forgot-password']);
  }
}
