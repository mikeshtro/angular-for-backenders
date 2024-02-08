import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

import { CoffeeType } from './coffee-type';
import { Coffee } from './cofffee';
import { CoffeeOverviewComponent } from './pick-coffee/coffee-overview/coffee-overview.component';

@Component({
  selector: 'mcf-root',
  standalone: true,
  imports: [CurrencyPipe, CoffeeOverviewComponent],
  template: `
    <div class="overview">
      @for (coffee of coffeeTypes; track coffee) {
        <mcf-coffee-overview
          [amount]="orderedCoffees.get(coffee)"
          (amountChange)="orderCoffee($event, coffee)"
        >
          <span class="coffee">
            @switch (coffee) {
              @case ('espresso') {
                Espresso
              }
              @case ('doppio') {
                Doppio
              }
              @case ('cappuccino') {
                Cappuccino
              }
            }
          </span>
          <span>Price: {{ getPrice(coffee) }}</span>
        </mcf-coffee-overview>
      }
    </div>
    <div class="total">Total price: {{ getTotalPrice() }}</div>
  `,
  styles: `
    .overview {
      display: flex;
      gap: 2rem;
    }

    .coffee {
      color: #12ae12;
    }

    .total {
      font-size: 2rem;
      line-height: 1.75;
    }
  `,
})
export class AppComponent {
  protected coffeeTypes: CoffeeType[] = ['espresso', 'doppio', 'cappuccino'];
  protected orderedCoffees = new Map<CoffeeType, number>();

  private readonly coffeePrices: Coffee[] = [
    { id: 'espresso', price: 1.25 },
    { id: 'doppio', price: 1.75 },
    { id: 'cappuccino', price: 2.25 },
  ];

  protected orderCoffee(amount: number, id: CoffeeType): void {
    this.orderedCoffees.set(id, amount);
  }

  protected getPrice(id: CoffeeType): number {
    const price = this.coffeePrices.find(x => x.id === id)?.price;
    const amount = this.orderedCoffees.get(id);

    if (price == null || amount == null) {
      return 0;
    }

    return price * amount;
  }

  protected getTotalPrice(): number {
    let totalPrice = 0;

    for (const price of this.coffeePrices) {
      const amount = this.orderedCoffees.get(price.id) ?? 0;
      totalPrice += amount * price.price;
    }

    return totalPrice;
  }
}
