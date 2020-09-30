import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'app/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  baseImagePath = "https://image.tmdb.org/t/p/original"

  //favorites;

  constructor(public favoriteService: FavoritesService) { }

  ngOnInit(): void {
    //this.favorites = this.favoriteService.getFavorite()
    //console.log(this.favorites);
  }

  remove(id){
    this.favoriteService.favorites = this.favoriteService.favorites.filter( (removed) => removed.id != id)
    localStorage.setItem('myList', JSON.stringify(this.favoriteService.favorites))   
    return this.favoriteService.favorites = this.favoriteService.favorites.filter( (removed) => removed.id != id)
  }
}
