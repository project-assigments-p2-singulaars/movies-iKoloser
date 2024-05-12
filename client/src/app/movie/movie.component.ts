import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,RouterLink } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';
import { Movies } from '../movies';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [MatIconModule,MatDividerModule,MatButtonModule,RouterLink],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {

    movieId: number = 0;
    movie!: Movies;

    constructor(private route: ActivatedRoute,private movieService: MovieServiceService) { }


    ngOnInit(): void {
      
      if (this.route.snapshot.paramMap.has('id')) {
        this.movieId = +this.route.snapshot.paramMap.get('id')!;
      } else {

      }

      this.movieService.getMovie(this.movieId).subscribe(data => {
        this.movie = data;
      });
    }




}
