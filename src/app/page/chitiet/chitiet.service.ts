import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChitietService {
  private apiUrl = 'https://api.themoviedb.org/3/movie/';
  private apiKey = '4e44d9029b1270a757cddc766a1bcb63';

  constructor(private http: HttpClient) { }

  getMovieDetails(movieId: string): Observable<any> {
    const url = `${this.apiUrl}/${movieId}?api_key=${this.apiKey}&language=en-US`;
    return this.http.get(url);
  }
}