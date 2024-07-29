import { DatePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightDirective } from '../../highlight.directive';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../interface/productinterface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UpperCasePipe,SlicePipe,DatePipe,HighlightDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public http: HttpClient){}

  list: Product[]=[]
  ngOnInit() {
    try{

    }
    catch{
      
    }
  }
  
  
  
  datetime = Date.now();
  isActive=true



}
