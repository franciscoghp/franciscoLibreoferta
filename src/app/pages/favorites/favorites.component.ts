import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'app/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  baseImagePath = "https://image.tmdb.org/t/p/original"

  constructor(public favoriteService: FavoritesService) { }

  ngOnInit(): void {
  }

  remove(id){
    this.favoriteService.favorites = this.favoriteService.favorites.filter( (removed) => removed.id != id)
    
    //Envio hacia localStorage de la peliocula que fue añadida a la lista de Favoritos
    localStorage.setItem('myList', JSON.stringify(this.favoriteService.favorites))   
    return this.favoriteService.favorites = this.favoriteService.favorites.filter( (removed) => removed.id != id)
  }
}
