import { Component, HostListener } from '@angular/core';
import { UserProfile_Icons } from 'src/app/constants/icons';
import { IconService } from 'src/app/services/Icon.service';
import { PostsService } from 'src/app/services/posts.service';
import { SearchInputService } from 'src/app/services/search-input.service';

@Component({
  selector: 'app-view-community',
  templateUrl: './view-community.component.html',
  styleUrls: ['./view-community.component.css']
})
export class ViewCommunityComponent {
  mobile: Boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 750) {
      this.mobile = true
      return
    }
    this.mobile = false
  }
  community!: any

  constructor(
    private iconService: IconService,
    private postsService: PostsService,
    private _searchInput: SearchInputService
  ){
    this.iconService.registerIcons(UserProfile_Icons, 'main_icons')
  }

  ngOnInit(){
    if (window.innerWidth < 750) {
      this.mobile = true
    } else {
      this.mobile = false
    }
    this.community = {
      title: 'Japon',
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra sit amet aliquam id diam Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Fringilla urna porttitor rhoncus dolor. Aliquet bibendum enim facilisis gravida. Erat imperdiet sed euismod nisi. Ut aliquam purus sit amet luctus venenatis.",
      miembros: 250,
    }
  }

}
