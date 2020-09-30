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
  favorite;

  constructor(  private http : HttpClient ) { }

  // Metodo Get Trending Movies
  get(url){
    return this.http.get(this.urlAPI+url+`?api_key=${this.apiKey}`)
  }

  // Metodo Get para buscar Movies o Series mediante la ID
  getSelectedById(url,id){
    return this.http.get(this.urlAPI+url+id+`?api_key=${this.apiKey}`)
  }

// Metodo Get Search Movies para buscar Movies o Series mediante un query
  lookingFor( query){
    return this.http.get(this.urlAPI+'/search/movie'+`?api_key=${this.apiKey}&query=${query}`)
  }

  // Metodo para recibir la busquedad desde un componente cualquiera y llevarlo al la pagina de busquedas
  setSearching(search){
    this.search = search
  }

// Metodo Get recibe la busquedad y la realiza para enviar los datos a Search page
  getSearching(){
    return this.lookingFor( this.search )
        .subscribe( (data:any) =>{
            console.log(data);
            
            this.searchResult = data.results
        })
  }

}
