import { Component, EventEmitter, Input, Output } from '@angular/core';

export type MenuItemType = 'default' | 'last';
export class MenuProps {
  text?: any;
  id?: any;
  type?: MenuItemType | any;
  onClick?: EventEmitter<any> = new EventEmitter<any>();
}

@Component({
  selector: 'app-menuItem',
  standalone: true,
  imports: [],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  @Input() menuProps: MenuProps = new MenuProps();
  @Output() onClick?: any = new EventEmitter<any>();
  onClickButton(event: any) {
    this.onClick.emit(event);
  }
}
