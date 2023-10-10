import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Home } from './home.model';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US';

  constructor(private http: HttpClient) {} //Nó khởi tạo một instance của HttpClient và lưu trữ nó trong biến http. HttpClient '
 
  getPopularMovies(): Observable<any> { //phương thức getPopularMovies() trả về một đối tượng kiểu Observable<any>. 
    return this.http.get(this.apiUrl);
  }

  //banner
  // baseurl = "https://api.themoviedb.org/3";
  // apikey = "08cc33db5ae3a747598ce2ad84376e66";

  bannerApiData():Observable<any>{
    return this.http.get(this.apiUrl);
  }

}