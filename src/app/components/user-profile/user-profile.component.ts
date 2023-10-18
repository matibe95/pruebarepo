import { Component, HostListener } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  constructor(private postsService: PostsService){}
  postsList!: any[]
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 750) {
      this.mobile = true
      return
    }
    this.mobile = false
  }
  mobile: Boolean = false;
  showPosts: String = 'visibleContainer';
  showOptions: String ='hiddenContainer';
  filterName: String = '';

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
