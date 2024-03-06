import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '@/environments/environment';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [HttpClientModule],
  providers: [MovieService],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss',
})
export class VideosComponent implements OnInit {
  httpClient = inject<any>(HttpClient);
  data: any = [];
  movieData: any = [];
  movieGenre: any = [];
  movieChild: any = [];
  movieChild2: any = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.fetchMovie();
    this.fetchGenre();
  }

  fetchMovie() {
    this.movieService.fetchMovie().subscribe((result) => {
      let resultData = result.results;
      this.movieData = resultData.slice(0, 1);
      this.movieChild = resultData.slice(1, 3);
      this.movieChild2 = resultData.slice(3, 5);
      // console.log(this.movieData);
      console.log('child2', this.movieChild2);
    });
  }

  fetchGenre() {
    this.movieService.fetchGenre().subscribe((result) => {
      let resultData = result.genres;
      this.movieGenre = resultData.splice(3);
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
