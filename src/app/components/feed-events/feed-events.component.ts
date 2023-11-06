import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feed-events',
  templateUrl: './feed-events.component.html',
  styleUrls: ['./feed-events.component.css']
})
export class FeedEventsComponent {
  @Input() event!: any
}
