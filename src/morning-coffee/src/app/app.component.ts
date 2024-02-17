import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { CoffeeService } from './core/coffee.service';
import { OrderOverviewComponent } from './order-coffee/order-overview/order-overview.component';
import { CoffeeListComponent } from './pick-coffee/coffee-list/coffee-list.component';
import { RegistrationFormComponent } from './registration/registration-form/registration-form.component';

@Component({
  selector: 'mcf-root',
  standalone: true,
  imports: [AsyncPipe, CoffeeListComponent, OrderOverviewComponent, RegistrationFormComponent],
  template: `
    @if (coffeePrices$ | async; as coffeePrices) {
      <mcf-coffee-list [coffeePrices]="coffeePrices" />
      <div class="forms">
        <mcf-order-overview [coffeePrices]="coffeePrices" />
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

  protected readonly coffeePrices$ = this.coffeeService.getCoffeePrices();
}
