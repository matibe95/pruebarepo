import { Component, Input } from '@angular/core';
import { Modal_Account_Icons } from '../constants/icons';
import { Modal_Account } from '../models/modal.model';
import { IconService } from '../services/Icon.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent {

  @Input() modal!: Modal_Account

  constructor(private modalSS: ModalService, private iconService: IconService){
    this.iconService.registerIcons(Modal_Account_Icons, 'landing_icons')
  }
  
  ngOnInit(){
    this.modal.lastCharacter = this.modal.originalTitle?.substring(this.modal.originalTitle.length - 1)
    const coloredWord = this.modal.coloredWord!
    const lastCharacter = this.modal.lastCharacter!
    this.modal.title = this.modal.originalTitle?.replace(coloredWord + lastCharacter, '')
  }
  
  closeModal(){
    this.modalSS.$modal.emit({
      state: false
    })
  }  
}
