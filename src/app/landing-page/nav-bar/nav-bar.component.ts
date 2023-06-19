import { Component } from '@angular/core';
import { URL_LOGOS } from '../../constants/logoUrl';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  theme: string = localStorage.getItem('user-theme')!
  logoUrl: string = URL_LOGOS[this.theme]
  
  updateLogo(){
    this.theme = localStorage.getItem('user-theme')!
    this.logoUrl = URL_LOGOS[this.theme]
  }
}
