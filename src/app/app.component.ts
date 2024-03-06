import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent],
  templateUrl: './app.component.html',
  // template: `<router-outlet></router-outlet>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ux_project';

  listButton = [
    {
      text: 'Button',
      type: 'info',
    },
    {
      text: 'Button',
      type: 'success',
    },
    {
      text: 'Button',
      type: 'danger',
    },
    {
      text: 'Button',
      type: 'warning',
    },
  ];

  buttonClick(val: any) {
    console.log('button click', val);
  }
}
