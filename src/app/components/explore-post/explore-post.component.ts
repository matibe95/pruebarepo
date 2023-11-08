import { Component, Input } from '@angular/core';
import { IMAGES_URL } from 'src/app/constants/imagesUrl';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-explore-post',
  templateUrl: './explore-post.component.html',
  styleUrls: ['./explore-post.component.css']
})
export class ExplorePostComponent {
  @Input() post!: any

  constructor(
    private _statusSS: StatusService
  ){

  }

  imgUrl = ''

  ngOnInit(){
    if (this.post?.image[0]?.imagen){
      this.imgUrl = IMAGES_URL.post + this.post?.image[0]?.imagen 
    }
  }

  showSelectedPost(){
    this._statusSS.$showSelectedPost.emit({state: true, data: this.post})
  }

  number: any = Math.floor(Math.random() * 11) + 1
}
