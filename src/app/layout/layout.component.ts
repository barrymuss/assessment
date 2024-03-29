import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { VideosComponent } from '../modules/videos/videos.component';
import { TopratedComponent } from '../modules/toprated/toprated.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MenuItemComponent,
    FormsModule,
    VideosComponent,
    TopratedComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  firstName: any = 'Wassem';
  lastName: any = 'arshad';
  search: any;

  listMenu = [
    {
      text: 'Video',
    },
    {
      text: 'People',
    },
    {
      text: 'Documents',
    },
    {
      text: 'Events',
    },
    {
      text: 'communities',
    },
    {
      text: 'favorites',
    },
    {
      text: 'channels',
      type: 'last',
    },
  ];

  listMenuFooter = [
    {
      text: 'about',
    },
    {
      text: 'for business',
    },
    {
      text: 'sugestions',
    },
    {
      text: 'help & FAQs',
    },
    {
      text: 'contact',
    },
    {
      text: 'pricing',
      type: 'last',
    },
  ];

  listMenuFooter2 = [
    {
      text: 'privacy',
    },
    {
      text: 'terms',
      type: 'last',
    },
  ];

  searchClick(e: any) {
    this.search = e.target.value;
    console.log(this.search);
  }

  buttonClick(val: any) {
    console.log(val);
  }

  onInit() {}
}
