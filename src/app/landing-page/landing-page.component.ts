import { Component } from '@angular/core';
import { InfoItem } from '../models/info-item.model';
// import  from 'src/assets/'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent {
  infoItems: Array<InfoItem> = [
    {
      svgIcon: 'info_message_icon',
      title: 'Intercambia Culturas',
      description: 'Intercambia culturas teniendo un chat directo con personas de otros paises.'
    },
    {
      svgIcon: 'info_post_icon',
      title: 'Posts Multimedia',
      description: 'Publica todo tu contenido multimedia  a la plataforma directo desde la App.'
    },
    {
      svgIcon: 'info_events_icon',
      title: 'Eventos Actuales',
      description: 'Enterate de todos los eventos que hay en tu zona para asistir con tus amigos.'
    }
  ]
}
