import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class BookingService {
  private bookingUrl = 'http://192.168.0.34:3000/api/booking';
  constructor(private http: HttpClient) {}
    bookings= [];

 getRemoteBookings(): Observable<[]>{
    return this.http.get<[]>(this.bookingUrl);     
 }

 addRemoteBooking(booking): Observable<any>{
    return this.http.post(this.bookingUrl, booking);     
 }

   
}
