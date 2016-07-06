import { provideRouter, RouterConfig } from '@angular/router';
import { TimesheetsComponent } from './timesheets';
import { LoginComponent } from './login';
import { NavigationComponent } from './navigation'

export const routes: RouterConfig = [
  {
    path: 'home',
    component: NavigationComponent,
    children: [
      { path: 'timesheets', component: TimesheetsComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: '/home/timesheets'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
