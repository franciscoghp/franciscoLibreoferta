import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'app/services/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  baseImagePath = "https://image.tmdb.org/t/p/original"
  image: string;
  title: string;
  voteAverage: number;
  busquedad: string;
  resultados;

  constructor( 
    public httpService: HttpService,
    private router: Router
    ) {

    // const search = this.httpService.getSearching()

    // this.busquedad = search;
    // console.log(search);
    

    // this.httpService.lookingFor('/search/movie',search )
    //     .subscribe( (data:any) =>{
    //         console.log(data);
            
    //         this.resultados = data.results
    //     })
   }

  ngOnInit(): void {
    console.log(this.httpService.searchResult);
    
  }

}
