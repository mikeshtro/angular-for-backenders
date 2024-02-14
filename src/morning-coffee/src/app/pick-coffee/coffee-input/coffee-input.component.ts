import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { transformCoffeeInput } from './transform-coffee-input';

@Component({
  selector: 'mcf-coffee-input',
  standalone: true,
  imports: [JsonPipe, FormsModule],
  templateUrl: './coffee-input.component.html',
  styleUrl: './coffee-input.component.css',
})
export class CoffeeInputComponent {
  @Input({ transform: transformCoffeeInput }) value!: number;

  @Output() valueChange = new EventEmitter<number>();

  protected orderCoffee(value: number): void {
    this.valueChange.emit(value);
  }
}
