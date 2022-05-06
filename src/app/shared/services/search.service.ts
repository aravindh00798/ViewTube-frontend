import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CategoriesComponent } from 'src/app/categories/categories.component';
import { setupTestingRouter } from '@angular/router/testing';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public ul = "";

  public testing :any
  public setTest(value: any) {
    return this.testing = value;
}
  private API_URL = 'https://www.googleapis.com/youtube/v3/';
  private API_TOKEN = 'AIzaSyBig3j8GHSZnzGXti5VLW6TGQ1Le8vTgik';
  // private category_id = `&videoCategoryId=${}`;


  constructor(private http: HttpClient) {}



  getVideos(query: string): Observable <any> {
    const url = `${this.API_URL}search?q=${query}&key=${this.API_TOKEN}&part=snippet&type=video&maxResults=10`;
    return this.http.get(url)
      .pipe(
        map((response: any) => response.items)
      );
  }
  getPopularVideos(): Observable <any> {
    const url = `${this.API_URL}videos?part=snippet&regionCode=in&maxResults=10&chart=mostPopular&key=${this.API_TOKEN}`;
    return this.http.get(url)
      .pipe(
        map((response: any) => response.items)
      );
      }
  getCategories():Observable<any>{
    const url = `${this.API_URL}videoCategories?part=snippet&regionCode=in&key=${this.API_TOKEN}`;
    return this.http.get(url)
    .pipe(
      map((response: any) => response.items)
    );
    }
   getOne(id):Observable<any>
    {
      console.log("here get one id "+id)
      const url=`${this.API_URL}videos?part=snippet&regionCode=in&maxResults=10&videoCategoryId=${id}&chart=mostPopular&key=${this.API_TOKEN}`;
      this.ul=url
      return this.http.get(url)
      .pipe(
        map((response: any) => response.items)
      );

}
    getCatView(){
      return this.http.get(this.ul)
      .pipe(
        map((response: any) => response.items)
      );
    }
}




