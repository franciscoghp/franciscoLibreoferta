import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  newFavorite;
  favorites = JSON.parse(localStorage.getItem('myList'))
                 ? JSON.parse(localStorage.getItem('myList'))
                 : [] ;

  constructor(private http: HttpService) { }

  setFavorite(id, type){
    if( type === 'movie'){
    this.http.getSelectedById('/movie/',id)
      .subscribe( (data: any) => {
        this.newFavorite = data
        console.log(this.newFavorite);
        this.favorites.push(this.newFavorite)
        localStorage.setItem('myList', JSON.stringify(this.favorites))
      } )
    }else{
      this.http.getSelectedById('/tv/',id)
      .subscribe( (data: any) => {
        this.newFavorite = data
        console.log(this.newFavorite);
        this.favorites.push(this.newFavorite)
        localStorage.setItem('myList', JSON.stringify(this.favorites))
      } )
    }
  }

  getFavorite(){
    return this.favorites
  }
}
