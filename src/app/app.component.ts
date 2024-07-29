import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from "./ui/cards/cards.component";
import { NavbarComponent } from "./ui/navbar/navbar.component";
import { SingleProductComponent } from "./pages/single-product/single-product.component";
import { HeroService } from './hero.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardsComponent, NavbarComponent, SingleProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'card-app';
  constructor(public api:HeroService){
    
  }
}
