import { Component, HostListener } from '@angular/core';
import { ViewEvent_Icons } from 'src/app/constants/icons';
import { IconService } from 'src/app/services/Icon.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent {
  
  mobile: Boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 750) {
      this.mobile = true
      return
    }
    this.mobile = false
  }
  event!: any

  constructor(private iconService: IconService){
    this.iconService.registerIcons(ViewEvent_Icons, 'main_icons')
  }


  ngOnInit(){
    if (window.innerWidth < 750) {
      this.mobile = true
    } else {
      this.mobile = false
    }
    this.event = {
      title: 'Japon',
      asistentes: 205,
      fecha: '22/02/22',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra sit amet aliquam id diam Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Fringilla urna porttitor rhoncus dolor. Aliquet bibendum enim facilisis gravida. Erat imperdiet sed euismod nisi. Ut aliquam purus sit amet luctus venenatis.'
    }
  }
}
