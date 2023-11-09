import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-searched-user-card',
  templateUrl: './searched-user-card.component.html',
  styleUrls: ['./searched-user-card.component.css']
})
export class SearchedUserCardComponent {
  @Input() user!: any

  
}
