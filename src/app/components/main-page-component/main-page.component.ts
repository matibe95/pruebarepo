import { Component, HostListener } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private postsService: PostsService){}
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 750) {
      this.mobile = true
      return
    }
    this.mobile = false
  }

  postsList!: any[]
  mobile: Boolean = false;

  ngOnInit(){
    if (window.innerWidth < 750) {
      this.mobile = true
    } else {
      this.mobile = false
    }

    this.postsService.ListarPostsUsuario().subscribe((res)=>{
      this.postsList = res.data
      // this.postsList.reverse()
    })
  }
}
