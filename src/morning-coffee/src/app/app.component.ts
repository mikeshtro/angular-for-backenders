import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

import { CoffeeType } from './coffee-type';
import { Coffee } from './cofffee';
import { CoffeeListComponent } from './pick-coffee/coffee-list/coffee-list.component';

@Component({
  selector: 'mcf-root',
  standalone: true,
  imports: [CoffeeListComponent],
  template: `
    <mcf-coffee-list [(orderedCoffees)]="orderedCoffees" [coffeePrices]="coffeePrices" />
    <div class="total">Total price: {{ getTotalPrice() }}</div>
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

  protected getTotalPrice(): number {
    let totalPrice = 0;

    for (const price of this.coffeePrices) {
      const amount = this.orderedCoffees.get(price.id) ?? 0;
      totalPrice += amount * price.price;
    }

    return totalPrice;
  }
}
