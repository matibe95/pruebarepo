import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feed-comunity',
  templateUrl: './feed-comunity.component.html',
  styleUrls: ['./feed-comunity.component.css']
})
export class FeedComunityComponent {
  @Input() community : any
}
