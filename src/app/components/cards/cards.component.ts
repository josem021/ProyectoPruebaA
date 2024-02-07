import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit{
  movies: any = [
    {name: 'La sociedad de nieve', image: './assets/img-movies/movie-one.webp'},
    {name: 'Hasta el último hombre', image: './assets/img-movies/movie-two.jpg'},
    {name: 'Hamilton', image: './assets/img-movies/movie-three.webp'},
    {name: 'Cinema Experience', image: './assets/img-movies/movie-four.jpg'},
    {name: 'Escuadron 6', image: './assets/img-movies/movie-five.jpg'},
    {name: 'Dune', image: './assets/img-movies/movie-six.jpg'},
    {name: 'El Camino', image: './assets/img-movies/movie-seven.jpg'},
    {name: 'Nadie', image: './assets/img-movies/movie-eight.jpg'},
    {name: 'Señor de los anillos', image: './assets/img-movies/movie-nine.jpg'},
    {name: 'Pinoccho Netflix', image: './assets/img-movies/movie-ten.webp'}

  ];

  scrollLeft() {
    const cards= document.querySelector('.cardsContainer') as HTMLElement;
    cards.scrollLeft -= cards.offsetWidth;
  }
  scrollRight() {
    const cards = document.querySelector('.cardsContainer') as HTMLElement;
    cards.scrollLeft += cards.offsetWidth;  
  }
  ngOnInit(): void {
    
  }
}