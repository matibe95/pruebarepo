import { Component, HostListener, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfile_Icons } from 'src/app/constants/icons';
import { IMAGES_URL } from 'src/app/constants/imagesUrl';
import { IconService } from 'src/app/services/Icon.service';
import { ComunidadService } from 'src/app/services/comunidad.service';
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

  communityPosts!: any[]
  community!: any
  miembrosWord = ''
  communityPicture = ''

  constructor(
    private iconService: IconService,
    private _comunidadSS: ComunidadService,
    private _searchInput: SearchInputService
  ){
    this.iconService.registerIcons(UserProfile_Icons, 'main_icons')
  }

  private activatedRoute = inject(ActivatedRoute)
  communityId: any = this.activatedRoute.snapshot.params['id']

  ngOnInit(){
    if (window.innerWidth < 750) {
      this.mobile = true
    } else {
      this.mobile = false
    }

    this._comunidadSS.ListarComunidad(this.communityId).subscribe({
      next: (res:any)=> {
        console.log(res)
        this.communityPosts = res.post.data
        this.community = res.comunidad
        this.miembrosWord = this.community?.pertenece?.length > 1 ? 'miembros' : 'miembro'
        this.communityPicture = IMAGES_URL.comunidad + this.community.imagen
      }
    })
  }

  joinCommunity(){
    this._comunidadSS.UnirseAComunidad(this.community.id).subscribe({
      next: (res:any )=>{
        console.log(res)
      }
    })
  }

}
