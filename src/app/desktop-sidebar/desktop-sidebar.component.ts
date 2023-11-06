import { Component } from '@angular/core';
import { IconService } from '../services/Icon.service';
import { Desktop_Sidebar } from '../constants/icons';
import { ModalService } from '../services/modal.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { IMAGES_URL } from '../constants/imagesUrl';
@Component({
  selector: 'desktop-sidebar',
  templateUrl: './desktop-sidebar.component.html',
  styleUrls: ['./desktop-sidebar.component.css']
})
export class DesktopSidebarComponent {
  constructor(
    private iconService: IconService,
    private modalSS: ModalService,
    private router: Router,
    private userSS: UsuarioService
  ){
    this.iconService.registerIcons(Desktop_Sidebar, 'main_icons')
  }

  userId: Number = parseInt(localStorage.getItem('id_user') || '')
  userProfilePicture = 'assets/default.jpg'

  openUploadMenu(){
    this.modalSS.$modal_option.emit({state: true, type:'main'})
  }

  ngOnInit(){
    this.userSS.getUser(this.userId).subscribe({
      next: (res: any) => {
        const { user_info } = res.user
        if (user_info){
          this.userProfilePicture = IMAGES_URL.user + user_info.foto_perfil
        }
      }
    })
  }
  
  navigateTo(route: any){
    this.router.navigateByUrl(route);
  }
}
