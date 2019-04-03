import { Component, OnInit } from '@angular/core';
import MovieService from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'list.movies',
  templateUrl: './list.movies.component.html',
  styleUrls: ['./list.movies.component.scss'],
})
export class ListMoviesComponent implements OnInit {
  movies = [];
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.movieService.getRemoteMovies().subscribe((result) => {this.movies = result;});
 }
 
 booking(movie){
  this.router.navigate(['/booking/'+movie.id]);
  movie = this.movieService.getMovies();
  }

offersPage(){
  this.router.navigate(['/offers']);
}

}
