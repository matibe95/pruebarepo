import { Component, HostListener } from '@angular/core';
import { UserProfile_Icons } from 'src/app/constants/icons';
import { IconService } from 'src/app/services/Icon.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-modify-profile',
  templateUrl: './modify-profile.component.html',
  styleUrls: ['./modify-profile.component.css']
})
export class ModifyProfileComponent {
  
  
  constructor(private userService: UsuarioService, private iconSS: IconService){
    iconSS.registerIcons(UserProfile_Icons,'main_icons')
  }
  mobile: Boolean = false;
  
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
  }
}
