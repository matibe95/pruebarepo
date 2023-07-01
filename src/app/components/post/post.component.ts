import { Component, Input } from '@angular/core';
import { Post_Icons } from 'src/app/constants/icons';
import { IconService } from 'src/app/services/Icon.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post!: any

  constructor(private iconService: IconService){
    this.iconService.registerIcons( Post_Icons ,'main_icons')
  }

  showOptions: boolean = true

  onToggleOptions(){
    this.showOptions=!this.showOptions;
  }
}
