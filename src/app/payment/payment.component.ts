import { Component, OnInit } from '@angular/core';
import BookingService from '../booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  booking = {
    customer_id :'',
    tickets :'',
    movie_id:'',
    movie_name:'',
    movie_time:'',
    theatre:'',
    screen:'',
    city:'',
    movie_date:'',
    date :'',
    amount :'',
    ticket_price:'',
  };

  constructor(private bookingService: BookingService, private router: Router) { }

  ngOnInit() {}
  addBooking(booking){
    this.bookingService.addRemoteBooking(this.booking)
  .subscribe(()=>this.router.navigate(['/pay']));
  console.log(JSON.stringify(booking));
  }

  pay(){
    this.router.navigate(['/pay']);
  }
}