import { Component } from '@angular/core';
import { InfoItem } from '../models/info-item.model';
import { INFO_ITEMS_LIST } from '../constants/infoItem';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent {
  infoItems: Array<InfoItem> = INFO_ITEMS_LIST 
}
