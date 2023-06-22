import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { URL_LOGOS } from '../../constants/logoUrl';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  theme: string = localStorage.getItem('user-theme')!
  logoUrl: string = URL_LOGOS[this.theme]
  modalState:boolean = true

  constructor(private modalSS: ModalService){}

  updateLogo(){
    this.theme = localStorage.getItem('user-theme')!
    this.logoUrl = URL_LOGOS[this.theme]
  }

  openModal(){
    this.modalSS.$modal.emit({ 
      originalTitle: '¡Bienvenido a Origins!', 
      coloredWord: 'Origins', 
      state: true
    })
  }
}
