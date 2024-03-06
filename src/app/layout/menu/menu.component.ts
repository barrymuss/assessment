import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItemComponent } from './menu-item/menu-item.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input() class: any;
}
