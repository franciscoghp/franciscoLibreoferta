import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  genre: any[]
  vote_average;

  constructor(private route: ActivatedRoute,
              private http : HttpService) {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
}

  ngOnInit(): void {
    this.http.getMovieById('/movie/', this.id)
      .subscribe( (data: any) => {
        console.log(data);

        this.image = data.backdrop_path

        this.title = data.title;

        this.description = data.overview;

        this.poster = data.poster_path;
        
        this.tagline = data.tagline;

        this.genre = data.genres;
        console.log(this.genre[0].name);
        console.log(this.genre[1]);
        console.log(this.genre[2]);


        this.vote_average = data.vote_average
      } )
  }

}

