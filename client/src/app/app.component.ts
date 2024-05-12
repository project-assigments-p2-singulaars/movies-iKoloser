import { Component, OnInit } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { MovieServiceService } from './movie-service.service';
import { Movies } from './movies';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  

  movies!: Movies[];
  movie!: Movies;

  constructor(private movieService: MovieServiceService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data; 
      console.log(this.movies);
    });
    
    this.movieService.getMovie(2).subscribe(data => {
      this.movie = data; 
      console.log(this.movie);
    });

  }

}
