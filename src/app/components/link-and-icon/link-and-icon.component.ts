import { Component, Input } from '@angular/core';
import { Footer_Icons } from '../../constants/icons';
import { LinkAndIcon } from '../../models/footerLinks';
import { IconService } from '../../services/Icon.service';

@Component({
  selector: 'link-and-icon',
  templateUrl: './link-and-icon.component.html',
  styleUrls: ['./link-and-icon.component.css']
})
export class LinkAndIconComponent {
  @Input() link!: LinkAndIcon

  constructor(private iconService: IconService){
    this.iconService.registerIcons(Footer_Icons, 'landing_icons')
  }
}
