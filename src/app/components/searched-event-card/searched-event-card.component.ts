import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IMAGES_URL } from 'src/app/constants/imagesUrl';

@Component({
  selector: 'app-searched-event-card',
  templateUrl: './searched-event-card.component.html',
  styleUrls: ['./searched-event-card.component.css']
})
export class SearchedEventCardComponent {
  @Input() event!: any
  imgUrl = ''
  
  constructor(private router: Router){}

  ngOnInit(){
    console.log(this.event)
    this.imgUrl = IMAGES_URL.evento + this.event.imagen
  }

  openEvent(){
    this.router.navigate([`/event/${this.event.id}`]);
  }
}
