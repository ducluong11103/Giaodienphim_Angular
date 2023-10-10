import { Component } from '@angular/core';
import {MovietheatersService} from './movietheaters.service'

@Component({
  selector: 'app-phimchieurap',
  templateUrl: './phimchieurap.component.html',
  styleUrls: ['./phimchieurap.component.css']
})
export class PhimchieurapComponent {
  products: any[]=[
    {
    "h2": "Hiện đang thịnh hành",
    "img1":"h1.webp",
    "img2":"h2.jpg",
    "img3":"h3.webp",
    },{
    "h2": "Phim Âu-Mỹ",
    "img1":"m1.webp",
    "img2":"m2.webp",
    "img3":"m3.webp",
    },{
      "h2": "Phim Hàng Quốc",
      "img1":"q1.webp",
      "img2":"q2.webp",
      "img3":"q3.webp",
    },{
        "h2": "Phim & chương trình truyền hình Đông Nam Á",
        "img1":"a1.webp",
        "img2":"a2.webp",
        "img3":"a3.webp",
    },{
      "img1":"a4.jpg",
      "img2":"a5.jpg",
      "img3":"a6.jpg",
  }]

  chieu:any[]=[
    {
      "img":"sp1.jpg",
      "text":"THE BEEP HOUSE",
      "trailer":"HD trailer",
      "view":"6k lượt xem"
      
    },{
      "img":"sp2.jpg",
      "text":"BLACK WINDOW",
      "trailer":"HD trailer",
      "view":"10k lượt xem"
      
    },{
      "img":"sp3.jpg",
      "text":"DON'T LOOK UP",
      "trailer":"HD trailer",
      "view":"11k lượt xem"
      
    },{
      "img":"sp4.jpg",
      "text":"NO TIME TO DIE",
      "trailer":"HD trailer",
      "view":"14k lượt xem"
      
    },{
      "img":"sp5.jpg",
      "text":"LES US IN",
      "trailer":"HD trailer",
      "view":"6k lượt xem"
      
    },{
      "img":"sp6.jpg",
      "text":"BLACK PINK",
      "trailer":"HD trailer",
      "view":"6k lượt xem"
      
    },{
      "img":"sp7.jpg",
      "text":"BIỆT ĐỘI SĂN MA",
      "trailer":"HD trailer",
      "view":"6k lượt xem"
      
    },{
      "img":"sp8.jpg",
      "text":"ÁN TỬ TRÊN XE",
      "trailer":"HD trailer",
      "view":"6k lượt xem"
      
    }]
}
