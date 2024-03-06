import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopratedService {
  headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${environment.apiToken}`,
  };
  constructor(private httpClient: HttpClient) {}

  fetchToprated(): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.apiURL}/movie/top_rated?language=en-US&page=1`,
      {
        headers: this.headers,
      }
    );
  }

  fetchUpcoming(): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.apiURL}/movie/upcoming?language=en-US&page=2`,
      {
        headers: this.headers,
      }
    );
  }
}
