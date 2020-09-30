import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  urlAPI = 'https://api.themoviedb.org/3';
  apiKey = '897dc96fc5d5f516f5c688bceda50567';
  token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTdkYzk2ZmM1ZDVmNTE2ZjVjNjg4YmNlZGE1MDU2NyIsInN1YiI6IjVmNzFmMTJlZDM4YjU4MDAzNmUzOWQyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UgpFAUaZHYRxlqoatTIXhW2Jl02wsOim50lsXQY6oQM';
  search: string;
  searchResult;

  constructor(  private http : HttpClient ) { }

  get(url){
    return this.http.get(this.urlAPI+url+`?api_key=${this.apiKey}`)
  }

  getMovieById(url, id){
    return this.http.get(this.urlAPI+url+id+`?api_key=${this.apiKey}`)
  }

  lookingFor(url, query){
    return this.http.get(this.urlAPI+url+`?api_key=${this.apiKey}&query=${query}`)
  }

  setSearching(search){
    this.search = search
  }

  getSearching(){
    return this.lookingFor('/search/movie', this.search )
        .subscribe( (data:any) =>{
            console.log(data);
            
            this.searchResult = data.results
        })
  }

}
