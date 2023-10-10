import { Component, OnInit } from '@angular/core';
import { ChitietService } from './chitiet.service';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from './movie.model';


@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent implements OnInit {
  // getMovieVideoResult:string = '';
  // movieDetails:any;
  movieDetails: MovieDetails | undefined;
  

  constructor(
    private chitietService: ChitietService,
    private route: ActivatedRoute,
    ) {}

    ngOnInit() {
      this.route.params.subscribe((params) => { 

        const movieId = params['id']; 
        this.getMovieDetails(movieId);
      });
    }
  
    getMovieDetails(movieId: string) {
      this.chitietService.getMovieDetails(movieId).subscribe( 
        (response) => {
          this.movieDetails = response;
        },
        (error) => {
          console.log(error);
        } 
      );
    }

    getImageUrl(posterPath: string): string {
      if (posterPath) {
        return 'https://image.tmdb.org/t/p/w500' + posterPath;
      }
      return 'path/to/default/image';
    }
  
}
//
