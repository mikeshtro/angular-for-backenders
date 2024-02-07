import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CoffeeInputComponent } from '../coffee-input/coffee-input.component';

@Component({
  selector: 'mcf-coffee-overview',
  standalone: true,
  imports: [CoffeeInputComponent],
  templateUrl: './coffee-overview.component.html',
  styleUrl: './coffee-overview.component.css',
})
export class CoffeeOverviewComponent {
  @Input({ required: true }) amount: number | null | undefined;

  @Output() amountChange = new EventEmitter<number>();

  protected orderCoffee(value: number): void {
    this.amountChange.emit(value);
  }
}
