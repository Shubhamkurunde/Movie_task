import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = 'https://imdb-api.com/en/API'
  constructor(private _http:HttpClient) { }

  getTop250() :any {
   return this._http.get<any>(this.url+'/Top250Movies'+environment.api_key);
  }
  MostPopular(){
    return this._http.get<any>(this.url+'/MostPopularMovies'+environment.api_key)
  }
  
}
