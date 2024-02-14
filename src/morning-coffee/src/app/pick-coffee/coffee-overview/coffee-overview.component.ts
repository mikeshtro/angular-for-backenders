import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { CoffeeInputComponent } from '../coffee-input/coffee-input.component';

@Component({
  selector: 'mcf-coffee-overview',
  standalone: true,
  imports: [CoffeeInputComponent],
  templateUrl: './coffee-overview.component.html',
  styleUrl: './coffee-overview.component.css',
})
export class CoffeeOverviewComponent implements OnChanges {
  @Input({ required: true }) amount: number | null | undefined;
  @Input({ required: true }) price: number | null | undefined;

  @Output() amountChange = new EventEmitter<number>();

  protected computedPrice = 0;

  ngOnChanges(): void {
    this.computedPrice = (this.price ?? 0) * (this.amount ?? 0);
  }

  protected orderCoffee(value: number): void {
    this.amountChange.emit(value);
  }
}
