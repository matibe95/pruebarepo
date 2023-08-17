import { Component } from '@angular/core';
import { IconService } from '../services/Icon.service';
import { Desktop_Sidebar } from '../constants/icons';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'desktop-sidebar',
  templateUrl: './desktop-sidebar.component.html',
  styleUrls: ['./desktop-sidebar.component.css']
})
export class DesktopSidebarComponent {
  constructor(private iconService: IconService, private modalSS: ModalService){
    this.iconService.registerIcons(Desktop_Sidebar, 'main_icons')
  }


  openUploadMenu(){
    this.modalSS.$modal_option.emit({state: true, type:'main'})
  }
}
