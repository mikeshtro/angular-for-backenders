import { DecimalPipe } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

import { Coffee } from '../../shared/coffee';
import { CoffeeType } from '../../shared/coffee-type';
import { TotalPricePipe } from '../total-price.pipe';
import { Customer } from './customer';

@Component({
  selector: 'mcf-order-overview',
  standalone: true,
  imports: [DecimalPipe, FormsModule, TotalPricePipe],
  templateUrl: './order-overview.component.html',
  styleUrl: './order-overview.component.css',
})
export class OrderOverviewComponent {
  @Input() orderedCoffees: Map<CoffeeType, number> | undefined;
  @Input() coffeePrices: Coffee[] | undefined;

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
