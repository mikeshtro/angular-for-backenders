import { Component } from '@angular/core';

import { OrderOverviewComponent } from './order-coffee/order-overview/order-overview.component';
import { CoffeeListComponent } from './pick-coffee/coffee-list/coffee-list.component';
import { RegistrationFormComponent } from './registration/registration-form/registration-form.component';
import { Coffee } from './shared/coffee';
import { CoffeeType } from './shared/coffee-type';

@Component({
  selector: 'mcf-root',
  standalone: true,
  imports: [CoffeeListComponent, OrderOverviewComponent, RegistrationFormComponent],
  template: `
    <mcf-coffee-list
      [orderedCoffees]="orderedCoffees"
      [coffeePrices]="coffeePrices"
      (orderedCoffeesChange)="setOrderedCoffees($event)"
    />
    <div class="forms">
      <mcf-order-overview [orderedCoffees]="orderedCoffees" [coffeePrices]="coffeePrices" />
      <mcf-registration-form [coffeeTypes]="['espresso', 'doppio', 'cappuccino']" />
    </div>
  `,
  styles: `
    .forms {
      display: flex;
      flex-direction: column;
      gap: 2rem;
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
