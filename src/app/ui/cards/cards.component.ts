import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Product } from '../../interface/productinterface';
import { Router } from '@angular/router';

 
 
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
    thumbnail: "",
    category: "",
    price: 0,
    stock: 0
  };

  @Output() myEvent = new EventEmitter<string>();

  constructor(private router: Router){}

  goNextPage(){
    this.router.navigate([`/product-page/${this.product.id}`]);
  }
}
 