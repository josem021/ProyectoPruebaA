import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private Api_Key = "410ad842c1c6d74701740e81046314da";

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<any> {
    const urlM = `https://api.themoviedb.org/3/movie/popular?api_key=${this.Api_Key}`;
    return this.httpClient.get(urlM);
  }
}
