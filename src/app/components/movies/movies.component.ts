import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  constructor(private movieService: MovieService) { }
  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.movieService.getMovies().subscribe({
      next: (result) => {
        this.movies = result.results;
      }/* ,
      error: (err) =>{
        console.log(err);
      } */
    })
  }
}
