import { Component } from '@angular/core';
import { Header_Icons } from 'src/app/constants/icons';
import { IconService } from 'src/app/services/Icon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private iconService: IconService){
    this.iconService.registerIcons(Header_Icons, 'main_icons')
  }
}
