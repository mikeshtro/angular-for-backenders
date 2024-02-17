import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { CoffeeService } from './core/coffee.service';
import { OrderOverviewComponent } from './order-coffee/order-overview/order-overview.component';
import { CoffeeListComponent } from './pick-coffee/coffee-list/coffee-list.component';
import { RegistrationFormComponent } from './registration/registration-form/registration-form.component';
import { CoffeeType } from './shared/coffee-type';

@Component({
  selector: 'mcf-root',
  standalone: true,
  imports: [AsyncPipe, CoffeeListComponent, OrderOverviewComponent, RegistrationFormComponent],
  template: `
    @if (coffeePrices$ | async; as coffeePrices) {
      <mcf-coffee-list
        [orderedCoffees]="orderedCoffees"
        [coffeePrices]="coffeePrices"
        (orderedCoffeesChange)="setOrderedCoffees($event)"
      />
      <div class="forms">
        <mcf-order-overview [orderedCoffees]="orderedCoffees" [coffeePrices]="coffeePrices" />
        <mcf-registration-form [coffeeTypes]="['espresso', 'doppio', 'cappuccino']" />
      </div>
    }
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
  private coffeeService = inject(CoffeeService);

  protected orderedCoffees = new Map<CoffeeType, number>();

  protected readonly coffeePrices$ = this.coffeeService.getCoffeePrices();

  protected setOrderedCoffees(coffees: Map<CoffeeType, number>): void {
    this.orderedCoffees = new Map(coffees);
  }
}
