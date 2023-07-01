import { Component } from '@angular/core';
import { NavBar_Icons } from 'src/app/constants/icons';
import { NavBarIcon, NAVBAR_ITEMS } from 'src/app/constants/navbarItems';
import { IconService } from 'src/app/services/Icon.service';

@Component({
  selector: 'main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent {
  constructor(private iconService: IconService){
    this.iconService.registerIcons(NavBar_Icons, 'main_icons')
  }
  navbarItems: NavBarIcon[] = NAVBAR_ITEMS
}
