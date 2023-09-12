import { Component } from '@angular/core';
import { IconService } from '../services/Icon.service';
import { Desktop_Sidebar } from '../constants/icons';
import { ModalService } from '../services/modal.service';
import { Router } from '@angular/router';
@Component({
  selector: 'desktop-sidebar',
  templateUrl: './desktop-sidebar.component.html',
  styleUrls: ['./desktop-sidebar.component.css']
})
export class DesktopSidebarComponent {
  constructor(private iconService: IconService, private modalSS: ModalService, private router: Router){
    this.iconService.registerIcons(Desktop_Sidebar, 'main_icons')
  }

  openUploadMenu(){
    this.modalSS.$modal_option.emit({state: true, type:'main'})
  }
  navigateToHome(){
    this.router.navigateByUrl('/home');
  }
}
