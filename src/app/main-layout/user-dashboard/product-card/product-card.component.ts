import { Component, Input } from '@angular/core';
import { fadeInUpAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  animations: [fadeInUpAnimation],
})
export class ProductCardComponent {
  @Input({ required: true }) product: any = {};

}
