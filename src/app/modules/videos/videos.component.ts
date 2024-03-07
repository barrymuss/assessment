import { Component, Input, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MovieService } from '../movie.service';
import { PeopleService } from './people.service';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [MovieService, PeopleService],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss',
})
export class VideosComponent implements OnInit {
  httpClient = inject<any>(HttpClient);

  @Input() videos: any;
  @Input() list: any;

  movieData: any = [];
  movieGenre: any = [];
  movieChild: any = [];
  movieChild2: any = [];

  peopleList: any = [];

  constructor(
    private movieService: MovieService,
    private peopleService: PeopleService
  ) {}

  ngOnInit(): void {
    this.fetchMovie();
    this.fetchGenre();
    this.fetchPeople();
  }

  fetchMovie() {
    this.movieService
      .fetchMovie()
      .pipe(
        map((result) =>
          result.results.map((element: any) => ({
            ...element,
            genre_ids: element.genre_ids.slice(0, 2),
          }))
        )
      )
      .subscribe((result) => {
        let resultData = result;
        this.movieData = resultData.slice(0, 1);
        this.movieChild = resultData.slice(1, 3);
        this.movieChild2 = resultData.slice(3, 5);
      });
  }

  fetchGenre() {
    this.movieService.fetchGenre().subscribe((result) => {
      let resultData = result.genres;
      this.movieGenre = resultData;
    });
  }

  fetchPeople() {
    this.peopleService
      .fetchPeople()
      .pipe(
        map((result) =>
          result.results.slice(0, 7).map((element: any) => ({
            ...element,
            gender: element.gender === 1 ? 'female' : 'male',
          }))
        )
      )
      .subscribe((peopleList) => {
        this.peopleList = peopleList;
        // console.log(this.peopleList);
      });
  }

  // fetchData() {
  //   this.httpClient
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .subscribe((data: any) => {
  //       this.data = data;
  //       console.log(environment.apiURL);
  //     });
  // }
}
