import { Component, HostListener, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewEvent_Icons } from 'src/app/constants/icons';
import { IMAGES_URL } from 'src/app/constants/imagesUrl';
import { IconService } from 'src/app/services/Icon.service';
import { EventosService } from 'src/app/services/eventos.service';

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


  private activatedRoute = inject(ActivatedRoute)
  event_id: any = this.activatedRoute.snapshot.params['id']
  event!: any
  postList!: any
  asistentesWord!: any
  imgUrl!: any
  belongsToEvent!: boolean


  constructor(
    private iconService: IconService,
    private _eventSS: EventosService
    ){
    this.iconService.registerIcons(ViewEvent_Icons, 'main_icons')
  }


  ngOnInit(){

    this._eventSS.ListarEvento(this.event_id).subscribe({
      next: (res:any)=> {
        this.event = res.evento
        console.log(this.event)
        this.postList = res.post
        this.asistentesWord = this.event?.pertenece?.length === 1 ? 'Asistente' : 'Asistentes'
        this.imgUrl = IMAGES_URL.evento + this.event?.imagen
        
        this.belongsToEvent = this.event.pertenece.some((user:any) => {
          return user.id == localStorage.getItem('id_user')
        })

        console.log(this.belongsToEvent)
      }
    })

    console.log(this.event)

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


  assistToEvent(){
    this._eventSS.AssistToEvent(this.event.id).subscribe({
      next(value) {
        location.reload()
      },
    })
  }

  leaveEvent(){
    this._eventSS.SalirDeEvento(this.event.id).subscribe({
      next: (res:any )=>{
        alert('Has abandonado el evento correctamente')
        location.reload()
      }
    })
  }
}
