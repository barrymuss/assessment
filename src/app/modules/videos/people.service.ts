import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${environment.apiToken}`,
  };

  constructor(private httpClient: HttpClient) {}

  fetchPeople(): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.apiURL}/person/popular?language=en-US`,
      {
        headers: this.headers,
      }
    );
  }
}
