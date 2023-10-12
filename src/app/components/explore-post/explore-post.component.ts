import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-post',
  templateUrl: './explore-post.component.html',
  styleUrls: ['./explore-post.component.css']
})
export class ExplorePostComponent {
  @Input() post!: any

  ngOnInit(){
    console.log(this.post)
  }

  number: any = Math.floor(Math.random() * 11) + 1
}
