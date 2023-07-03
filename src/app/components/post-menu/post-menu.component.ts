import { Component } from '@angular/core';
import { PostMenu_Icons } from 'src/app/constants/icons';
import { IconService } from 'src/app/services/Icon.service';

@Component({
  selector: 'app-post-menu',
  templateUrl: './post-menu.component.html',
  styleUrls: ['./post-menu.component.css']
})
export class PostMenuComponent {
  constructor(private iconService: IconService){
    this.iconService.registerIcons( PostMenu_Icons ,'main_icons')
  }

  url = './assets/main_icons/plus.svg'

  onSelectFile(ev: any){
    if (ev.target.files){
      const reader = new FileReader()
       reader.readAsDataURL(ev.target.files[0])
       reader.onload = (event: any) => {
        this.url = event.target.result
       }
    }
  }

  loadPost: boolean = false

  showLoadPostMenu(){
    this.loadPost = true
  }
}
