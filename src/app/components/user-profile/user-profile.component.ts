import { Component, HostListener, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfile_Icons } from 'src/app/constants/icons';
import { User } from 'src/app/models/user.model';
import { IconService } from 'src/app/services/Icon.service';
import { PostsService } from 'src/app/services/posts.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  constructor(private userService: UsuarioService, private iconSS: IconService){
    iconSS.registerIcons(UserProfile_Icons,'main_icons')
  }

  private activatedRoute = inject(ActivatedRoute)
  userId: any = this.activatedRoute.snapshot.params['id']
  post!: any
  user!: any
  mobile: Boolean = false;
  showPosts: String = 'visibleContainer';
  showOptions: String ='hiddenContainer';
  filterName: String = '';
  myProfile: Boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 750) {
      this.mobile = true
      return
    }
    this.mobile = false
  }


  ngOnInit(){
    if (window.innerWidth < 750) {
      this.mobile = true
    } else {
      this.mobile = false
    }
    this.userService.getUser(this.userId).subscribe((res: any)=>{
      // this.postsList = res
      if (this.userId === localStorage.getItem('id_user')){
        this.myProfile = true
      }
      this.user = res.user
      this.post = res.post
      
      console.log(res)
      // this.postsList.reverse()
    })
  }
}
