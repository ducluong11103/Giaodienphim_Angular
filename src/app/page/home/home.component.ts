import { Home } from './home.model'
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bannerResult:any=[];  
  movies: Home[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    //đk
    //callback để xử lý dữ liệu khi nó được trả về từ Observable.
    this.homeService.getPopularMovies().subscribe((Home) => {
      this.movies = Home.results;
    });

    //
    this.bannerData();
  }

  //bannerdata
  bannerData() {
    this.homeService.bannerApiData().subscribe((result) => {
      this.bannerResult = result.results;
    });
  }


  
  getImageUrl(posterPath: string): string {
    if (posterPath) {
      return 'https://image.tmdb.org/t/p/w500' + posterPath;
    }
    return 'path/to/default/image';
  }
  
}

  // constructor(private router: Router) { }

  //   products: any[] = [
  //   { 
  //     "h2": "Chỉ có trên Netflix", 
  //     "img1":"n1.jpg",
  //     "img2":"n2.webp",
  //     "img3":"n3.jpg",
  //     "img4":"n4.jpg",
  //     "img5":"n5.jpg"
  //   },{
  //     "h2": "Đang thịnh hành", 
  //     "img1":"h1.jpg",
  //     "img2":"h2.jpg",
  //     "img3":"h3.jpg",
  //     "img4":"h4.jpg",
  //     "img5":"h5.jpg"
  //   },{ 
  //     "h2": "Dánh sách của tôi", 
  //     "img1":"n1.jpg",
  //     "img2":"n1.jpg",
  //     "img3":"n1.jpg",
  //     "img4":"n1.jpg",
  //     "img5":"n1.jpg"
  //   },{ 
  //     "h2": "Anime", 
  //     "img1":"m1.webp",
  //     "img2":"m2.webp",
  //     "img3":"m3.webp",
  //     "img4":"m4.webp",
  //     "img5":"m5.jpg"
  //   },{ 
  //     "h2": "Chương trình truyền hình tội phạm Âu-Mỹ", 
  //     "img1":"hd1.jpg",
  //     "img2":"hd2.jpg",
  //     "img3":"hd3.jpg",
  //     "img4":"hd4.jpg",
  //     "img5":"hd5.jpg"
  //   },{ 
  //     "h2": "Phim Hàn Quốc", 
  //     "img1":"q1.jpg",
  //     "img2":"q2.jpg",
  //     "img3":"q3.jpg",
  //     "img4":"q4.jpg",
  //     "img5":"q5.jpg"
  //   }
  // ];
  // ngOnInit() {
  // }
// }
