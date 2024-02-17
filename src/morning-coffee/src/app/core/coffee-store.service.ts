import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CoffeeType } from '../shared/coffee-type';

@Injectable({
  providedIn: 'root',
})
export class CoffeeStoreService {
  private readonly orderedCoffeesSubject = new BehaviorSubject<Map<CoffeeType, number>>(new Map());

  readonly orderedCoffees$ = this.orderedCoffeesSubject.asObservable();

  setOrderedCoffees(amount: number, id: CoffeeType): void {
    const orderedCoffees = new Map(this.orderedCoffeesSubject.value);
    orderedCoffees.set(id, amount);
    this.orderedCoffeesSubject.next(orderedCoffees);
  }
}
