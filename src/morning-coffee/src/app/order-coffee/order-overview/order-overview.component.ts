import { AsyncPipe, DecimalPipe } from '@angular/common';
import { Component, inject, Input, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

import { CoffeeStoreService } from '../../core/coffee-store.service';
import { Coffee } from '../../shared/coffee';
import { TotalPricePipe } from '../total-price.pipe';
import { Customer } from './customer';

@Component({
  selector: 'mcf-order-overview',
  standalone: true,
  imports: [AsyncPipe, DecimalPipe, FormsModule, TotalPricePipe],
  templateUrl: './order-overview.component.html',
  styleUrl: './order-overview.component.css',
})
export class OrderOverviewComponent {
  @Input() coffeePrices: Coffee[] | undefined;

  private readonly coffeeStoreService = inject(CoffeeStoreService);

  protected orderedCoffees$ = this.coffeeStoreService.orderedCoffees$;

  @ViewChild('email', { read: NgModel }) private emailModel!: NgModel;

  protected readonly countries = [
    { code: 'CZE', name: 'Czech Republic' },
    { code: 'SK', name: 'Slovakia' },
    { code: 'US', name: 'USA' },
  ];

  protected customer: Customer = {
    firstName: '',
    lastName: '',
    country: '',
    sendNotifications: false,
    email: '',
  };

  protected setSendNotifications(sendNotifications: boolean): void {
    this.customer.sendNotifications = sendNotifications;
    if (!sendNotifications) {
      this.customer.email = '';
      this.emailModel.control.markAsPristine();
    }
  }

  protected confirm(): void {
    console.log(this.customer);
  }
}
