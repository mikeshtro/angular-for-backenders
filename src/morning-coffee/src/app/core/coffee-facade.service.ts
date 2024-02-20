import { inject, Injectable, Signal } from '@angular/core';
import { catchError, of, ReplaySubject, share } from 'rxjs';

import { CoffeeType } from '../shared/coffee-type';
import { CoffeeStoreService } from './coffee-store.service';
import { CoffeeService } from './coffee.service';

@Injectable({
  providedIn: 'root',
})
export class CoffeeFacadeService {
  private coffeeService = inject(CoffeeService);
  private coffeeStoreService = inject(CoffeeStoreService);

  readonly coffeePrices$ = this.coffeeService.getCoffeePrices().pipe(
    share({ connector: () => new ReplaySubject(1) }),
    catchError(() => of(undefined))
  );

  readonly orderedCoffees: Signal<Map<CoffeeType, number>> = this.coffeeStoreService.orderedCoffees;

  confirmOrder(order: Map<CoffeeType, number>): void {
    this.coffeeStoreService.setOrderedCoffees(order);
  }
}
