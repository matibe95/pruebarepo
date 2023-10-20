import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searched-event-card',
  templateUrl: './searched-event-card.component.html',
  styleUrls: ['./searched-event-card.component.css']
})
export class SearchedEventCardComponent {
  @Input() event!: any

  constructor(private router: Router){}

  openEvent(){
    this.router.navigate([`/event/1`]);
  }
}
