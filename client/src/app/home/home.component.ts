import { Component } from '@angular/core';
import { Movies } from '../movies';
import { MovieServiceService } from '../movie-service.service';
import { RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  movies!: Movies[];
  movie!: Movies;

  constructor(private movieService: MovieServiceService) { }


  ngOnInit() {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data; 
    });
  }

}
