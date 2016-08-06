import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'app-root',
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'app works!';
}
