import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Coffee } from '../../shared/coffee';
import { CoffeeType } from '../../shared/coffee-type';
import { CoffeeOverviewComponent } from '../coffee-overview/coffee-overview.component';

@Component({
  selector: 'mcf-coffee-list',
  standalone: true,
  imports: [CoffeeOverviewComponent],
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.css',
})
export class CoffeeListComponent {
  @Input() orderedCoffees: Map<CoffeeType, number> | undefined;
  @Input() coffeePrices: Coffee[] | undefined;

  @Output() readonly orderedCoffeesChange = new EventEmitter<Map<CoffeeType, number>>();

  protected orderCoffee(amount: number, id: CoffeeType): void {
    this.orderedCoffees?.set(id, amount);
    this.orderedCoffeesChange.emit(this.orderedCoffees);
  }
}
