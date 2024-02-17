import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Coffee } from '../shared/coffee';

@Injectable({ providedIn: 'root' })
export class CoffeeService {
  private readonly httpClient = inject(HttpClient);

  getCoffeePrices(): Observable<Coffee[]> {
    return this.httpClient.get<Coffee[]>('http://localhost:3000/coffee-prices');
  }
}
