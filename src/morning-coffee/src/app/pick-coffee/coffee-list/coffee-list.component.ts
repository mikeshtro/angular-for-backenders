import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { CoffeeFacadeService } from '../../core/coffee-facade.service';
import { CoffeeType } from '../../shared/coffee-type';
import { CoffeeOverviewComponent } from '../coffee-overview/coffee-overview.component';

@Component({
  selector: 'mcf-coffee-list',
  standalone: true,
  imports: [CoffeeOverviewComponent],
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.css',
})
export class CoffeeListComponent {
  private readonly coffeeFacadeService = inject(CoffeeFacadeService);

  protected coffeePrices = toSignal(this.coffeeFacadeService.coffeePrices$);
  protected orderedCoffees = this.coffeeFacadeService.orderedCoffees;

  protected orderCoffee(amount: number, id: CoffeeType): void {
    this.coffeeFacadeService.orderCoffee(amount, id);
  }
}
