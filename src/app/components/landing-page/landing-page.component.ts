import { Component } from '@angular/core';
import { InfoItem } from '../../models/info-item.model';
import { INFO_ITEMS_LIST } from '../../constants/infoItem';
import { ModalService } from '../../services/modal.service';
import { Modal_Account } from '../../models/modal.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent {  
  infoItems: InfoItem[] = INFO_ITEMS_LIST 
  modalState: boolean = false
  modalProps!: Modal_Account

  constructor(private modalSS: ModalService){}

  ngOnInit(){
    this.modalSS.$modal.subscribe((modal)=> {
      this.modalState = modal.state
      this.modalProps = modal
    })
  }

  ngOnDestroy(){
    this.modalSS.$modal.unsubscribe()
  }
}
