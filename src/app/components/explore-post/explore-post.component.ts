import { Component, Input } from '@angular/core';
import { IMAGES_URL } from 'src/app/constants/imagesUrl';

@Component({
  selector: 'app-explore-post',
  templateUrl: './explore-post.component.html',
  styleUrls: ['./explore-post.component.css']
})
export class ExplorePostComponent {
  @Input() post!: any

  imgUrl = ''

  ngOnInit(){
    console.log(this.post)
    if (this.post?.image[0]?.imagen){
      this.imgUrl = IMAGES_URL.post + this.post?.image[0]?.imagen 
    }
  }

  number: any = Math.floor(Math.random() * 11) + 1
}
