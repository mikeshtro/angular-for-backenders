import { Pipe, PipeTransform } from '@angular/core';

import { CoffeeType } from './coffee-type';
import { Coffee } from './cofffee';

@Pipe({
  name: 'totalPrice',
  standalone: true,
})
export class TotalPricePipe implements PipeTransform {
  transform(orderedCoffees: Map<CoffeeType, number>, coffeePrices: Coffee[]): number {
    let totalPrice = 0;

    for (const price of coffeePrices) {
      const amount = orderedCoffees.get(price.id) ?? 0;
      totalPrice += amount * price.price;
    }

    return totalPrice;
  }
}
