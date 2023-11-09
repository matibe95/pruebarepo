import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IMAGES_URL } from 'src/app/constants/imagesUrl';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-feed-events',
  templateUrl: './feed-events.component.html',
  styleUrls: ['./feed-events.component.css']
})
export class FeedEventsComponent {
  @Input() event!: any

  imgUrl = 'assets/default_community.png'

  constructor(
    private _eventSS: EventosService,
    private router: Router,
  ){

  }

  ngOnInit(){
    if (this.event.imagen){
      this.imgUrl = IMAGES_URL.evento + this.event.imagen
    }
  }

  goToEvent(){
    this.router.navigate([`/event/${this.event.id}`]);
  }

  onClick(){
    this._eventSS.SalirDeEvento(this.event.id).subscribe({
      next: (res:any)=>{
        alert('Has abandonado el evento con exito')
        location.reload()

      }
    })
  }
}
