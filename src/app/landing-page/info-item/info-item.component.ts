import { Component, Input } from '@angular/core';
import { InfoItem } from '../../models/info-item.model';
import { IconService } from '../../services/Icon.service';
import { InfoItemsIcons } from "../../constants/icons";

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.css']
})
export class InfoItemComponent {
  @Input() item!: InfoItem

  constructor(private iconService: IconService){
    this.iconService.registerIcons(InfoItemsIcons, 'landing_icons')
  }
}