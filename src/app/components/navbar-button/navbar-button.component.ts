import { Component, Input } from '@angular/core';
import { NavBarIcon } from 'src/app/constants/navbarItems';

@Component({
  selector: 'app-navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.css']
})
export class NavbarButtonComponent {
  @Input() item!: NavBarIcon
}
