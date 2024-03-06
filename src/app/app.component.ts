import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, LayoutComponent],
  templateUrl: './app.component.html',
  // template: `<router-outlet></router-outlet>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ux_project';

  listButton = [
    {
      text: 'Video',
      id: 'info',
    },
    {
      text: 'People',
      id: 'success',
    },
    {
      text: 'Documents',
      id: 'danger',
    },
    {
      text: 'Events',
      id: 'warning',
    },
    {
      text: 'communities',
      id: 'warning',
    },
  ];

  buttonClick(val: any) {
    console.log('button click', val);
  }
}
