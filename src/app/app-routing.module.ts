import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { PhimleComponent } from './page/phimle/phimle.component';
import { PhimchieurapComponent } from './page/phimchieurap/phimchieurap.component';
import { ChitietComponent } from './page/chitiet/chitiet.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'phimchieurap', component: PhimchieurapComponent},
  {path: 'phimle', component: PhimleComponent},
  { path: 'chitietphim/:id', component: ChitietComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
