import { Component, HostListener } from '@angular/core';
import { SearchBar_Icons } from 'src/app/constants/icons';
import { IconService } from 'src/app/services/Icon.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css']
})
export class ExplorePageComponent {
  postsList!: any[]
  mobile: Boolean = false;
  showPosts: String = 'hiddenContainer';
  showOptions: String ='visibleContainer';

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 750) {
      this.mobile = true
      return
    }
    this.mobile = false
  }
  constructor(private iconService: IconService, private postsService: PostsService){
    this.iconService.registerIcons(SearchBar_Icons, 'main_icons')
  }

  onClick(){
    this.showPosts = 'hiddenContainer'
    this.showOptions = 'visibleContainer'
  }

  ngOnInit(){
    if (window.innerWidth < 750) {
      this.mobile = true
    } else {
      this.mobile = false
    }
    this.postsService.ListarFeed().subscribe((res)=>{
      this.postsList = res.data
      console.log(this.postsList)
      // this.postsList.reverse()
    })
  }
}
