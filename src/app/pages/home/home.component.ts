import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  baseImagePath = "https://image.tmdb.org/t/p/original"
  image: string;
  id;
  title: string;
  voteAverage: number;
  movies;
  series;
  movies4;

  constructor(private http : HttpService) {

    this.http.get('/trending/movie/week')
      .subscribe( (data: any) => {
        console.log(data);
        
        let peliculasOrdenadas = data.results;

        // Este procedimeinto es para obtener el arreglo de peliculas ordenadas
        // según su popularidad de mayor a menor
        peliculasOrdenadas.sort(function(a,b){
          return b.popularity - a.popularity
        })

        // Este procedimiento es para reducir el arreglo a 10 items
        peliculasOrdenadas = peliculasOrdenadas.slice(0,10)

        // Arreglo de 10 de peliculas populares 
        this.movies = peliculasOrdenadas
        console.log(this.movies);

        // Voto Promedio de la pelicula mas popular para el Home  
        this.voteAverage = peliculasOrdenadas[0].vote_average

        // Titulo de la pelicula mas popular para el Home  
        this.title = peliculasOrdenadas[0].original_title

        // Imagen de la pelicula mas popular para el Home
        this.image = peliculasOrdenadas[0].backdrop_path
        console.log(this.image);

        // Id de la pelicula mas popular para el Home
        this.id = peliculasOrdenadas[0].id
        console.log(this.id);
    
  }) 
  
  this.http.get('/tv/popular')
    .subscribe((data:any) =>{
      console.log(data);
        
        let seriesOrdenadas = data.results;        

        // Este procedimeinto es para obtener el arreglo de series ordenadas
        // según su popularidad de mayor a menor
        seriesOrdenadas.sort(function(a,b){
          return b.popularity - a.popularity
        })

        // Este procedimiento es para reducir el arreglo a 10 items
        seriesOrdenadas = seriesOrdenadas.slice(0,10)

        // Arreglo de 10 de series populares 
        this.series = seriesOrdenadas
        console.log(this.series);

        // Voto Promedio de la serie mas popular para el Home  
        this.voteAverage = seriesOrdenadas[0].vote_average
    })

    // Consulta Http para obetener las 4 peliculas mas acalamdas
    this.http.get('/movie/top_rated')
      .subscribe( (data: any) => {
        console.log(data);
        
        let peliculasAclamadas = data.results;

        // Este procedimeinto es para obtener el arreglo de peliculas Aclamadas
        // según su popularidad de mayor a menor
        peliculasAclamadas.sort(function(a,b){
          return b.vote_average - a.vote_average
        })

        // Este procedimiento es para reducir el arreglo a 4 items
        peliculasAclamadas = peliculasAclamadas.slice(0,4)

        // Arreglo de 10 de peliculas populares 
        this.movies4 = peliculasAclamadas
        console.log(this.movies4);

        // Voto Promedio de la pelicula mas popular para el Home  
        this.voteAverage = peliculasAclamadas[0].vote_average
  })
  }

  ngOnInit(): void {}

}
