import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export type ButtonType = 'success' | 'danger' | 'warning' | 'info';
export class ButtonProps {
  text?: any;
  disabled?: boolean = false;
  type?: ButtonType | any;
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() props: ButtonProps = new ButtonProps();
  @Output() onClick?: any = new EventEmitter<any>();

  onClickButton(event: any) {
    this.onClick.emit(event);
  }
}
