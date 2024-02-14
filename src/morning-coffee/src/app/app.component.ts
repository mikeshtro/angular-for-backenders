import { Component } from '@angular/core';

import { CoffeeType } from './coffee-type';
import { Coffee } from './cofffee';
import { CoffeeListComponent } from './pick-coffee/coffee-list/coffee-list.component';
import { TotalPricePipe } from './total-price.pipe';

@Component({
  selector: 'mcf-root',
  standalone: true,
  imports: [CoffeeListComponent, TotalPricePipe],
  template: `
    <mcf-coffee-list
      [orderedCoffees]="orderedCoffees"
      [coffeePrices]="coffeePrices"
      (orderedCoffeesChange)="setOrderedCoffees($event)"
    />
    <div class="total">Total price: {{ orderedCoffees | totalPrice: coffeePrices }}</div>
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
