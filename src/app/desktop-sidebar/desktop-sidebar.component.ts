import { Component } from '@angular/core';
import { IconService } from '../services/Icon.service';
import { Desktop_Sidebar } from '../constants/icons';

@Component({
  selector: 'desktop-sidebar',
  templateUrl: './desktop-sidebar.component.html',
  styleUrls: ['./desktop-sidebar.component.css']
})
export class DesktopSidebarComponent {
  constructor(private iconService: IconService){
    this.iconService.registerIcons(Desktop_Sidebar, 'main_icons')
  }
}
