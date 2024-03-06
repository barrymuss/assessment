import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: '',

    loadChildren: () =>
      import('./layout/layout.component').then((m) => m.LayoutComponent),
  },
];
