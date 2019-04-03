import { Component, OnInit } from '@angular/core';
import MovieService from '../movie.service';
import BookingService from '../booking.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  constructor(private movieService: MovieService, private bookingService: BookingService, private route: ActivatedRoute, private router: Router) { }
  id: number;
  private sub: any;
  movie:any={};
  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a 
      
      this.movieService.getRemoteMovieById(this.id).subscribe((movie)=>{this.movie = movie; });
   });
 }

payment(){
  this.router.navigate(['/payment']);
}

}
