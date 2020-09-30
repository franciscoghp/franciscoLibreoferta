import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'app/services/http.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute,
              private http : HttpService) {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
}

  ngOnInit(): void {
    this.http.getMovieById('/movie/', this.id)
      .subscribe( (data: any) => {
        console.log(data);
        
      } )
  }

}

