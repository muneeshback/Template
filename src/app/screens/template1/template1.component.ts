import { Component } from '@angular/core';
import { Product } from '../../common/models/product.model';
import { ProductCardComponent } from "../../common/product-card/product-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template1',
  standalone: true,
  imports: [ProductCardComponent,CommonModule],
  templateUrl: './template1.component.html',
  styleUrl: './template1.component.scss'
})
export class Template1Component {

  getProducts(): Product[] {
    return [
      {
        "name": "PS England Shoes",
        "price": 37.24,
        "rating": 3,
        "colors": [
          { "name": "Black", "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAMPDLw6MfWespB2twgPpyYxHLgwVlJ8Ilyg&s" },
          { "name": "Brown", "imageUrl": "https://imagescdn.peterengland.com/img/app/product/7/740141-8293053.jpg?auto=format&w=390" }
        ],
        "isOnSale": true
      },
      {
        "name": "PS England Jacket",
        "price": 17.24,
        "rating": 2,
        "colors": [
          { "name": "Green", "imageUrl": "https://m.media-amazon.com/images/I/71jREdHXgBL._AC_UY1100_.jpg" },
          { "name": "Red", "imageUrl": "https://m.media-amazon.com/images/I/71opc9-E2KL._AC_UY1100_.jpg" }
        ],
        "isOnSale": true
      },
      {
        "name": "PS England Shirt",
        "price": 27.24,
        "rating": 4,
        "colors": [
          { "name": "Blue", "imageUrl": "https://rukminim2.flixcart.com/image/720/864/l37mtu80/shirt/g/6/c/50-pesfoslbe01568-peter-england-original-imagedswfkycavgb.jpeg?q=60&crop=false" },
          { "name": "Brown", "imageUrl": "https://img.tatacliq.com/images/i10/437Wx649H/MP000000016868010_437Wx649H_202303160212001.jpeg" }
        ],
        "isOnSale": true
      },
      {
        "name": "PS England Shoes",
        "price": 43.67,
        "rating": 5,
        "colors": [
          { "name": "Pink", "imageUrl": "https://5.imimg.com/data5/ECOM/Default/2023/8/331729425/MW/RY/GK/132716594/1691059117196-graf10d9e61c3d44af859bb236dc500b2120180444origin80prcnt1-500x500.jpeg" },
          { "name": "Gray", "imageUrl": "https://imagescdn.peterengland.com/img/app/product/8/869083-10326033.jpg?auto=format&w=390" }
        ],
        "isOnSale": true
      },
      {
        "name": "PS England Pants",
        "price": 43.67,
        "rating": 5,
        "colors": [
          { "name": "Green", "imageUrl": "https://rukminim2.flixcart.com/image/850/1000/xif0q/trouser/4/t/l/32-pctfsssfs78480-peter-england-original-imahfefpuqzh3pzh.jpeg?q=90&crop=false" },
          { "name": "Gray", "imageUrl": "https://rukminim2.flixcart.com/image/750/900/xif0q/trouser/l/q/l/32-petfoctfj87749-peter-england-original-imagqp2dy2zy2jcn.jpeg?q=20&crop=false" }
        ],
        "isOnSale": true
      }
    ];
  }

  products: Product[] = this.getProducts();
}
