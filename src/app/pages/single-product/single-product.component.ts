import { Component, EventEmitter, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
 
import { ActivatedRoute } from '@angular/router';
import { CardsComponent } from '../../ui/cards/cards.component';
import { HomeComponent } from '../home/home.component';
import { NgIf, UpperCasePipe } from '@angular/common';
import { Product } from '../../interface/productinterface';
// import { BuyButtonComponent } from "../../ui/buy-button/buy-button.component";
 
@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [CardsComponent, HomeComponent, NgIf, UpperCasePipe],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
 
export class SingleProductComponent{
 
  @Input() text: string = ''
  @Input() product: Product = {} as Product
  @Output() btnClick = new EventEmitter<Product>();
 
  // product: Product | undefined;
 
  constructor(private route: ActivatedRoute) { }
 
  async ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        this.product = await response.json();
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    }
  }
 
}