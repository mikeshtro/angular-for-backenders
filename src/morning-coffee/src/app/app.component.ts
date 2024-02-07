import { Component } from '@angular/core';

import { CoffeeType } from './coffee-type';
import { Coffee } from './cofffee';
import { CoffeeOverviewComponent } from './pick-coffee/coffee-overview/coffee-overview.component';

@Component({
  selector: 'mcf-root',
  standalone: true,
  imports: [CoffeeOverviewComponent],
  template: `
    @for (coffee of coffees; track coffee.id) {
      <mcf-coffee-overview
        [amount]="orderedCoffees.get(coffee.id)"
        (amountChange)="orderCoffee($event, coffee.id)"
      >
        <span class="coffee">
          @switch (coffee.id) {
            @case ('espresso') {
              Espresso
            }
            @case ('doppio') {
              Doppio
            }
            @case ('cappuccino') {
              Cappuccino
            }
          }
        </span>
      </mcf-coffee-overview>
    }
  `,
  styles: `
    .coffee {
      color: #12ae12;
    }
  `,
})
export class AppComponent {
  protected orderedCoffees = new Map<CoffeeType, number>();

  protected readonly coffees: Coffee[] = [
    { id: 'espresso', price: 1.25 },
    { id: 'doppio', price: 1.75 },
    { id: 'cappuccino', price: 2.25 },
  ];

  protected orderCoffee(amount: number, id: CoffeeType): void {
    this.orderedCoffees.set(id, amount);
  }
}
