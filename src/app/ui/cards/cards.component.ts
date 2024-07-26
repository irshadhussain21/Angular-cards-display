import { Component, Input } from '@angular/core';
import { Product } from '../../interface/productinterface';

 
 
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() product: Product = {
    id: 0,
    title: " ",
    description: "",
    thumbnail:"",
    category: ""
  };
}
 