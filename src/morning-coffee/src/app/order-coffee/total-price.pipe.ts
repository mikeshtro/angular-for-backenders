import { Pipe, PipeTransform } from '@angular/core';

import { Coffee } from '../shared/coffee';
import { CoffeeType } from '../shared/coffee-type';

@Pipe({
  name: 'totalPrice',
  standalone: true,
})
export class TotalPricePipe implements PipeTransform {
  transform(
    orderedCoffees: Map<CoffeeType, number> | undefined,
    coffeePrices: Coffee[] | undefined
  ): number {
    let totalPrice = 0;

    if (orderedCoffees == null || coffeePrices == null) {
      return totalPrice;
    }

    for (const price of coffeePrices) {
      const amount = orderedCoffees.get(price.id) ?? 0;
      totalPrice += amount * price.price;
    }

    return totalPrice;
  }
}
