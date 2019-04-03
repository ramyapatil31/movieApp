import { Component, OnInit } from '@angular/core';
import MovieService from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {

  constructor(private movieService: MovieService, private router: Router) { }
  movies=[];
  
  ngOnInit() {
    this.movieService.getRemoteMovies().subscribe((result) => {this.movies = result;});
 }

}
