import { Component } from '@angular/core';

import { OrderOverviewComponent } from './order-coffee/order-overview/order-overview.component';
import { CoffeeListComponent } from './pick-coffee/coffee-list/coffee-list.component';
import { RegistrationFormComponent } from './registration/registration-form/registration-form.component';

@Component({
  selector: 'mcf-root',
  standalone: true,
  imports: [CoffeeListComponent, OrderOverviewComponent, RegistrationFormComponent],
  template: `
    <mcf-coffee-list />
    <div class="forms">
      <mcf-order-overview />
      <mcf-registration-form />
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
export class AppComponent {}
