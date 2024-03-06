import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() firstName: any;
  @Input() lastName: any;
  data: any = '';
  @Output() onClick?: any = new EventEmitter<any>();

  searchClick(event: any) {
    this.data = event.target.value;
    this.onClick.emit(this.data);
  }
}
