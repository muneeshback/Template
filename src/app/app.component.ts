import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Template1Component } from './screens/template1/template1.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Template1Component,ProductCardComponent,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ecommerce';
}
