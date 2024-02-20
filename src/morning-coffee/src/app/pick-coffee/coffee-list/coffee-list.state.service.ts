import { inject, Injectable, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { CoffeeFacadeService } from '../../core/coffee-facade.service';
import { CoffeeType } from '../../shared/coffee-type';

@Injectable()
export class CoffeeListStateService {
  private readonly coffeeFacadeService = inject(CoffeeFacadeService);

  private readonly coffees = signal(new Map<CoffeeType, number>());

  readonly coffeePrices = toSignal(this.coffeeFacadeService.coffeePrices$);

  readonly orderedCoffees: Signal<Map<CoffeeType, number>> = this.coffees;

  orderCoffee(id: CoffeeType, amount: number): void {
    this.coffees.update(orderedCoffees => new Map(orderedCoffees).set(id, amount));
  }

  confirmOrder(): void {
    this.coffeeFacadeService.confirmOrder(this.coffees());
  }
}
