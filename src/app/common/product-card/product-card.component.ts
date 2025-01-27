import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() product!: Product;
  stars: number[] = [];
  imageUrl:string='';
  selectedColorIndex: number = 0;

  ngOnInit() {
    this.imageUrl=this.product.colors[0].imageUrl;
    this.stars = Array(this.product.rating).fill(1); 
  }
  
  imageChange(i:number){
    this.selectedColorIndex = i;
    this.imageUrl=this.product.colors[i].imageUrl;
  }
  

}
