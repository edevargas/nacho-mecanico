import { Component } from '@angular/core';
import { MAIN_MENU_NAVIGATION } from './application/routing/navigation';

@Component({
  selector: 'dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navigation = MAIN_MENU_NAVIGATION;
}
