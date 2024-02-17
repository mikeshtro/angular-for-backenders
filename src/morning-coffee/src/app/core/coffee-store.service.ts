import { Injectable, signal } from '@angular/core';

import { CoffeeType } from '../shared/coffee-type';

@Injectable({
  providedIn: 'root',
})
export class CoffeeStoreService {
  readonly orderedCoffees = signal(new Map<CoffeeType, number>());

  setOrderedCoffees(amount: number, id: CoffeeType): void {
    this.orderedCoffees.update(orderedCoffees => new Map(orderedCoffees).set(id, amount));
  }
}
