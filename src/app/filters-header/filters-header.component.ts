import { Component } from '@angular/core';
import { IconService } from '../services/Icon.service';
import { Desktop_Header } from '../constants/icons';

@Component({
  selector: 'filters-header',
  templateUrl: './filters-header.component.html',
  styleUrls: ['./filters-header.component.css']
})
export class FiltersHeaderComponent {
  constructor(private iconService: IconService){
    this.iconService.registerIcons(Desktop_Header, 'main_icons')
  }
}
