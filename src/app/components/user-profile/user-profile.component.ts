import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  constructor(private postsService: PostsService){}
  postsList!: any[]

  ngOnInit(){
    this.postsService.ListarPostsUsuario().subscribe((res)=>{
      this.postsList = res.data
      // this.postsList.reverse()
    })
  }
}
