import { Component } from '@angular/core';

import { OrderOverviewComponent } from './order-coffee/order-overview/order-overview.component';
import { CoffeeListComponent } from './pick-coffee/coffee-list/coffee-list.component';
import { Coffee } from './shared/coffee';
import { CoffeeType } from './shared/coffee-type';

@Component({
  selector: 'mcf-root',
  standalone: true,
  imports: [CoffeeListComponent, OrderOverviewComponent],
  template: `
    <mcf-coffee-list
      [orderedCoffees]="orderedCoffees"
      [coffeePrices]="coffeePrices"
      (orderedCoffeesChange)="setOrderedCoffees($event)"
    />
    <mcf-order-overview [orderedCoffees]="orderedCoffees" [coffeePrices]="coffeePrices" />
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
