import { Component, HostListener } from '@angular/core';
import { SearchBar_Icons } from 'src/app/constants/icons';
import { IconService } from 'src/app/services/Icon.service';
import { PostsService } from 'src/app/services/posts.service';
import { SearchInputService } from 'src/app/services/search-input.service';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css']
})
export class ExplorePageComponent {
  postsList!: any[]
  mobile: Boolean = false;
  showPosts: String = 'visibleContainer';
  showOptions: String ='hiddenContainer';
  filterName: String = '';
  selectedPost!: any;
  showSelectedPost!: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 750) {
      this.mobile = true
      return
    }
    this.mobile = false
  }
  constructor(
    private iconService: IconService,
    private postsService: PostsService,
    private _searchInput: SearchInputService,
    private _statusSS: StatusService
  ){
    this.iconService.registerIcons(SearchBar_Icons, 'main_icons')
  }

  onChange(eventTarget: any){
    this._searchInput.$searchedData.emit(eventTarget.value)
    this.showPosts = 'hiddenContainer'
    this.showOptions = 'visibleContainer'
  }

  cleanSearch(){
    this.filterName = '';
    this.showPosts = 'visibleContainer'
    this.showOptions = 'hiddenContainer'
  }

  ngOnInit(){
    if (window.innerWidth < 750) {
      this.mobile = true
    } else {
      this.mobile = false
    }
    this.postsService.ListarFeed().subscribe((res)=>{
      this.postsList = res.data
      // this.postsList.reverse()
    })

    this._statusSS.$showSelectedPost.subscribe((res)=>{
      console.log(res)
      this.selectedPost = res.data
      this.showSelectedPost = res.state
    })
  }

  closePostModal(){
    this._statusSS.$showSelectedPost.emit({state: false})
  }
}
