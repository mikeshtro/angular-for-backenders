import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'mcf-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  template: `
    <mcf-navigation />
    <router-outlet />
  `,
})
export class AppComponent {}
