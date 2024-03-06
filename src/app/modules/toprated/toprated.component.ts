import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { TopratedService } from './toprated.service';
import { MovieService } from '../movie.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-toprated',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [TopratedService, MovieService],
  templateUrl: './toprated.component.html',
  styleUrl: './toprated.component.scss',
})
export class TopratedComponent implements OnInit {
  httpClient = inject<any>(HttpClient);

  topRated: any = [];
  thumbsRated: any = [];
  movieGenre: any = [];
  movieChild: any = [];
  movieChild2: any = [];

  upthumbsRated: any = [];
  upmovieGenre: any = [];
  upmovieChild: any = [];
  upmovieChild2: any = [];

  constructor(
    private topratedService: TopratedService,
    private genreService: MovieService
  ) {}

  ngOnInit(): void {
    this.fetchToprated();
    this.fetchGenre();
    this.fetchUpcoming();
  }

  fetchGenre() {
    this.genreService.fetchGenre().subscribe((result) => {
      let resultData = result.genres;
      this.movieGenre = resultData.splice(3);
    });
  }

  fetchToprated() {
    this.topratedService
      .fetchToprated()
      .pipe(
        map((result) =>
          result.results.map((element: any) => ({
            ...element,
          }))
        )
      )
      .subscribe((mov) => {
        this.topRated = mov;
        this.thumbsRated = mov.splice(0, 1);
        this.movieChild = mov.splice(0, 2);
        this.movieChild2 = mov.splice(4, 2);
      });
  }

  fetchUpcoming() {
    this.topratedService
      .fetchUpcoming()
      .pipe(
        map((result) =>
          result.results.map((element: any) => ({
            ...element,
          }))
        )
      )
      .subscribe((mov) => {
        this.upthumbsRated = mov.splice(0, 1);
        this.upmovieChild = mov.splice(0, 2);
        this.upmovieChild2 = mov.splice(4, 2);
        console.log(this.upthumbsRated);
      });
  }
}
