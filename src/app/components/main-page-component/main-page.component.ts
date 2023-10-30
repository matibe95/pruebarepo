import { Component, HostListener } from '@angular/core';
import { ExplorePage_Icons } from 'src/app/constants/icons';
import { Post } from 'src/app/models/Post';
import { SearchFilter } from 'src/app/models/searchfilter.model';
import { IconService } from 'src/app/services/Icon.service';
import { PostsService } from 'src/app/services/posts.service';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private postsService: PostsService, private statusSS: StatusService, private iconSS: IconService){
    iconSS.registerIcons(ExplorePage_Icons,'main_icons')
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 750) {
      this.mobile = true
      return
    }
    this.mobile = false
  }
  feedFilter: SearchFilter = 'post'
  postsList!: any[]
  mobile: boolean = false;
  postLikes!: any[]
  showLikes: boolean = false;

  ngOnInit(){
    console.log(this.feedFilter)
    if (window.innerWidth < 750) {
      this.mobile = true
    } else {
      this.mobile = false
    }

    this.statusSS.$feedFilter.subscribe((value)=>{
      this.feedFilter = value
    })
    this.listarPosts()

    this.statusSS.$posts.subscribe(()=>{
      this.listarPosts()
    })

    this.statusSS.$showLikes.subscribe((value)=>{
      this.postLikes = value.likes
      this.showLikes = value.show
    })
  }
  cerrarLikes(){
    this.showLikes = false
  }

  listarPosts(){
    this.postsService.ListarPostsUsuario().subscribe((res)=>{
      this.postsList = res.data
      // this.postsList.reverse()
    })
  }
}
