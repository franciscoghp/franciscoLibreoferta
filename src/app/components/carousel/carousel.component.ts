import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  fila
  peliculas
  flechaIzquierda
  flechaDerecha
  baseImagePath = "https://image.tmdb.org/t/p/original";

  constructor() { }
  @Input() movies: [];
  @Input() selector: string;

  ngOnInit(): void {}

  moveRight() {
    this.fila = document.querySelector('.'+this.selector);
    this.fila.scrollLeft += this.fila.offsetWidth;
  }

  moveLeft() {
    this.fila = document.querySelector('.'+this.selector);
    this.fila.scrollLeft -= this.fila.offsetWidth;
  }
}
