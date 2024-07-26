import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from "./ui/cards/cards.component";
import { CardlistComponent } from './ui/cardlist/cardlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardsComponent, CardlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'card-app';
}
