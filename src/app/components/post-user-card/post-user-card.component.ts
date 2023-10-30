import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-user-card',
  templateUrl: './post-user-card.component.html',
  styleUrls: ['./post-user-card.component.css']
})
export class PostUserCardComponent {
  @Input() like!: any

  ngOnInit(){
    console.log(this.like)
  }
}
