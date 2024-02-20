import { Injectable, signal } from '@angular/core';

import { CoffeeType } from '../shared/coffee-type';

@Injectable({
  providedIn: 'root',
})
export class CoffeeStoreService {
  readonly orderedCoffees = signal(new Map<CoffeeType, number>());

  setOrderedCoffees(orderedCoffees: Map<CoffeeType, number>): void {
    this.orderedCoffees.set(new Map(orderedCoffees));
  }
}
