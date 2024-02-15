import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

import { Coffee } from './coffee';
import { CoffeeType } from './coffee-type';
import { CoffeeListComponent } from './pick-coffee/coffee-list/coffee-list.component';
import { TotalPricePipe } from './total-price.pipe';

@Component({
  selector: 'mcf-root',
  standalone: true,
  imports: [CoffeeListComponent, TotalPricePipe, DecimalPipe],
  template: `
    <mcf-coffee-list
      [orderedCoffees]="orderedCoffees"
      [coffeePrices]="coffeePrices"
      (orderedCoffeesChange)="setOrderedCoffees($event)"
    />
    <div class="total">
      Total price: {{ orderedCoffees | totalPrice: coffeePrices | number: '1.2' }}
    </div>
  `,
  styles: `
    .total {
      font-size: 2rem;
      line-height: 1.75;
    }
  `,
})
export class AppComponent {
  protected orderedCoffees = new Map<CoffeeType, number>();

  protected readonly coffeePrices: Coffee[] = [
    { id: 'espresso', price: 1.25 },
    { id: 'doppio', price: 1.75 },
    { id: 'cappuccino', price: 2.25 },
  ];

  protected setOrderedCoffees(coffees: Map<CoffeeType, number>): void {
    this.orderedCoffees = new Map(coffees);
  }
}
