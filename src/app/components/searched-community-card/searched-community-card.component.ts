import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searched-community-card',
  templateUrl: './searched-community-card.component.html',
  styleUrls: ['./searched-community-card.component.css']
})
export class SearchedCommunityCardComponent {
  @Input() community!: any

  constructor(private router: Router){

  }

  openCommunity(){
    this.router.navigate([`/community/1`]);
  }
}
