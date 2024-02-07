import { Component, EventEmitter, Input, Output } from '@angular/core';

import { transformCoffeeInput } from './transform-coffee-input';

@Component({
  selector: 'mcf-coffee-input',
  standalone: true,
  imports: [],
  templateUrl: './coffee-input.component.html',
  styleUrl: './coffee-input.component.css',
})
export class CoffeeInputComponent {
  @Input({ transform: transformCoffeeInput }) value!: number;

  @Output() valueChange = new EventEmitter<number>();

  protected orderCoffee(): void {
    this.valueChange.emit((this.value ?? 0) + 1);
  }
}
