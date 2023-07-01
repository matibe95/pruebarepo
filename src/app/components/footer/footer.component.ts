import { Component } from '@angular/core';
import { FOOTER_LINKS } from '../../constants/footerLinks';
import { LinkAndIcon } from '../../models/footerLinks';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year = new Date().getFullYear()
  links: LinkAndIcon[] = FOOTER_LINKS
}
