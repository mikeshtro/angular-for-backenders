import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Coffee } from '../../shared/coffee';
import { CoffeeType } from '../../shared/coffee-type';
import { TotalPricePipe } from '../total-price.pipe';

@Component({
  selector: 'mcf-order-overview',
  standalone: true,
  imports: [DecimalPipe, TotalPricePipe],
  templateUrl: './order-overview.component.html',
  styleUrl: './order-overview.component.css',
})
export class OrderOverviewComponent {
  @Input() orderedCoffees: Map<CoffeeType, number> | undefined;
  @Input() coffeePrices: Coffee[] | undefined;
}
