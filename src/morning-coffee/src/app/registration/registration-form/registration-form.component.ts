import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { CoffeeType } from '../../shared/coffee-type';

@Component({
  selector: 'mcf-registration-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css',
})
export class RegistrationFormComponent implements OnInit, OnDestroy {
  @Input() coffeeTypes: CoffeeType[] | undefined;

  private subscription: Subscription | undefined;

  protected readonly form = new FormGroup({
    username: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
      nonNullable: true,
    }),
    coffeesPerDay: new FormControl(0, { validators: [Validators.min(0)], nonNullable: true }),
    haveFavorite: new FormControl(false, { nonNullable: true }),
    favoriteCoffee: new FormControl(
      {
        value: undefined satisfies CoffeeType | undefined,
        disabled: true,
      },
      { validators: [Validators.required] }
    ),
  });

  ngOnInit(): void {
    this.subscription = this.form.controls.haveFavorite.valueChanges.subscribe(hasFavorite => {
      if (hasFavorite) {
        this.form.controls.favoriteCoffee.enable();
      } else {
        this.form.controls.favoriteCoffee.disable();
        this.form.controls.favoriteCoffee.setValue(undefined);
        this.form.controls.favoriteCoffee.markAsPristine();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  protected confirm(): void {
    console.log(this.form.value);
  }
}
