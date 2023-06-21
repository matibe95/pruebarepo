import { Component } from '@angular/core';
import { Modal_Account_Icons } from '../constants/icons';
import { IconService } from '../services/Icon.service';
import { SwitchService } from '../services/switch.service';

@Component({
  selector: 'modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent {

  originalTitle = '¡Bienvenido a Origins!'
  coloredWord = 'Origins'
  lastCharacter = this.originalTitle.substring(this.originalTitle.length - 1)
  title = this.originalTitle.replace(this.coloredWord + this.lastCharacter, '')
  
  
  constructor(private modalSS: SwitchService, private iconService: IconService){
    this.iconService.registerIcons(Modal_Account_Icons, 'landing_icons')
  }

  closeModal(){
    this.modalSS.$modal.emit(false)
  }  
}
