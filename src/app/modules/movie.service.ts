import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${environment.apiToken}`,
  };

  constructor(private httpClient: HttpClient) {}

  fetchMovie(): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.apiURL}/movie/popular?language=en-US&page=1`,
      {
        headers: this.headers,
      }
    );
  }

  fetchGenre(): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.apiURL}/genre/movie/list?language=en-US`,
      {
        headers: this.headers,
      }
    );
  }
}
