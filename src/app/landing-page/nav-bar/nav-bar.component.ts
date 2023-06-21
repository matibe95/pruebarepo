import { Component } from '@angular/core';
import { SwitchService } from 'src/app/services/switch.service';
import { URL_LOGOS } from '../../constants/logoUrl';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  theme: string = localStorage.getItem('user-theme')!
  logoUrl: string = URL_LOGOS[this.theme]
  modalSwitch:boolean = true

  constructor(private modalSS: SwitchService){}

  updateLogo(){
    this.theme = localStorage.getItem('user-theme')!
    this.logoUrl = URL_LOGOS[this.theme]
  }

  ngOnInit(){
    this.modalSS.$modal.subscribe((value)=> {
      this.modalSwitch = value
    })
  }

  openModal(){
    this.modalSwitch = true
  }
}
