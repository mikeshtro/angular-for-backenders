import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'pick-coffee',
    loadComponent: () =>
      import('./pick-coffee/coffee-list/coffee-list.component').then(x => x.CoffeeListComponent),
  },
  {
    path: 'order-coffee',
    loadComponent: () =>
      import('./order-coffee/order-overview/order-overview.component').then(
        x => x.OrderOverviewComponent
      ),
  },
  {
    path: 'registration',
    loadComponent: () =>
      import('./registration/registration-form/registration-form.component').then(
        x => x.RegistrationFormComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'pick-coffee',
  },
];
