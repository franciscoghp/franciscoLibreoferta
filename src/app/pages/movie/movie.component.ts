import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoritesService } from 'app/services/favorites.service';
import { HttpService } from 'app/services/http.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  baseImagePath = "https://image.tmdb.org/t/p/original"
  id: string;
  image: string;
  title;
  description;
  poster;
  tagline;
  genre;
  vote_average;
  type;

  constructor(private route: ActivatedRoute,
              private http : HttpService,
              private favoriteService: FavoritesService) {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.type = window.location.pathname;
    this.type = this.type.slice(22,27)
    console.log(this.type);
}

  ngOnInit(): void {
    if( this.type === 'movie'){
    this.http.getSelectedById('/movie/',this.id)
      .subscribe( (data: any) => {
        console.log(data);

        this.image = data.backdrop_path

        this.title = data.title;

        this.description = data.overview;

        this.poster = data.poster_path;
        
        this.tagline = data.tagline;

        this.genre = data.genres[0].name

        this.vote_average = data.vote_average
      } )
    }else{
      this.http.getSelectedById('/tv/',this.id)
      .subscribe( (data: any) => {
        console.log(data);

        this.image = data.backdrop_path

        this.title = data.name;

        this.description = data.overview;

        this.poster = data.poster_path;
        
        this.tagline = data.tagline;

        this.genre = data.genres[0].name

        this.vote_average = data.vote_average
      } )
    }
  }

  favorite(){
    this.favoriteService.setFavorite(this.id, this.type)
  }

}

