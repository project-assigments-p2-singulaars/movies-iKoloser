import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from './movies';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class MovieServiceService {

  constructor(private http: HttpClient) { }




  getMovies(): Observable<Movies[]> { 

    return this.http.get<Movies[]>(environment.apiUrl); 
    
  }


  getMovie(id:number){

    return this.http.get<Movies>(`${environment.apiUrl}/${id}`);
    
  }



}
