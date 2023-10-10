import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { PhimleComponent } from './page/phimle/phimle.component';
import { PhimchieurapComponent } from './page/phimchieurap/phimchieurap.component';
import { ChitietComponent } from './page/chitiet/chitiet.component';
// import { SlideComponent } from './layouts/slide/slide.component';
import { HomeService } from './page/home/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PhimleComponent,
    PhimchieurapComponent,
    ChitietComponent,
    // SlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
