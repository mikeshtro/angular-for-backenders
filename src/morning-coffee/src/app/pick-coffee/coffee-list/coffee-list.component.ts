import { AsyncPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';

import { CoffeeStoreService } from '../../core/coffee-store.service';
import { Coffee } from '../../shared/coffee';
import { CoffeeType } from '../../shared/coffee-type';
import { CoffeeOverviewComponent } from '../coffee-overview/coffee-overview.component';

@Component({
  selector: 'mcf-coffee-list',
  standalone: true,
  imports: [AsyncPipe, CoffeeOverviewComponent],
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.css',
})
export class CoffeeListComponent {
  @Input() coffeePrices: Coffee[] | undefined;

  private readonly coffeeStoreService = inject(CoffeeStoreService);

  protected orderedCoffees$ = this.coffeeStoreService.orderedCoffees$;

  protected orderCoffee(amount: number, id: CoffeeType): void {
    this.coffeeStoreService.setOrderedCoffees(amount, id);
  }
}
