import { Component } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContentComponent, CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
