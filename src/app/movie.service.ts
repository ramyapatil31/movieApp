import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class MovieService {

  private moviesUrl = 'http://192.168.0.34:3000/api/movies';
  constructor(private http: HttpClient) {
   
}
 movies= [];


 getRemoteMovies(): Observable<[]>{
    return this.http.get<[]>(this.moviesUrl);     
 }
 deleteRemoteMovies(movie){
    return this.http.delete(this.moviesUrl+'/'+movie.id);     
 }

 addRemoteMovie(movie):Observable<any>{
  	return this.http.post(this.moviesUrl,movie);
 }

  updateRemoteMovie(movie):Observable<any>{
    return this.http.put(this.moviesUrl + "/"+movie.id,movie);
 }

  getRemoteMovieById(id):Observable<any>{
   return this.http.get<[]>(this.moviesUrl + "/"+id);
 }

 getMovies(){
    return this.movies;
}
}
