import { Component, inject } from '@angular/core';

import { CoffeeType } from '../../shared/coffee-type';
import { CoffeeOverviewComponent } from '../coffee-overview/coffee-overview.component';
import { CoffeeListStateService } from './coffee-list.state.service';

@Component({
  selector: 'mcf-coffee-list',
  standalone: true,
  imports: [CoffeeOverviewComponent],
  providers: [CoffeeListStateService],
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.css',
})
export class CoffeeListComponent {
  private readonly coffeeListStateService = inject(CoffeeListStateService);

  protected coffeePrices = this.coffeeListStateService.coffeePrices;
  protected orderedCoffees = this.coffeeListStateService.orderedCoffees;

  protected orderCoffee(amount: number, id: CoffeeType): void {
    this.coffeeListStateService.orderCoffee(id, amount);
  }

  protected confirmOrder(): void {
    this.coffeeListStateService.confirmOrder();
  }
}
