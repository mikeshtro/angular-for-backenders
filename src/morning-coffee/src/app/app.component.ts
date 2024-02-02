import { Component } from '@angular/core';

import { CoffeeOverviewComponent } from './pick-coffee/coffee-overview/coffee-overview.component';

@Component({
  selector: 'mcf-root',
  standalone: true,
  imports: [CoffeeOverviewComponent],
  template: `
    <h1>Hello from Angular</h1>
    <mcf-coffee-overview />
  `,
  styles: `
    h1 {
      color: red;
    }
  `,
})
export class AppComponent {}
