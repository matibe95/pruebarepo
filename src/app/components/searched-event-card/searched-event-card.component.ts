import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-searched-event-card',
  templateUrl: './searched-event-card.component.html',
  styleUrls: ['./searched-event-card.component.css']
})
export class SearchedEventCardComponent {
  @Input() event!: any
}
