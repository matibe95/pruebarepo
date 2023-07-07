import { Component, Input } from '@angular/core';
import { Post_Icons } from 'src/app/constants/icons';
import { IconService } from 'src/app/services/Icon.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post!: any

  constructor(private iconService: IconService, private userService: UsuarioService) {
    this.iconService.registerIcons( Post_Icons ,'main_icons')
  }

  showOptions: boolean = true
  userPost: any

  ngOnInit(){
    this.post = this.post.post
    this.userService.getUser(this.post.id_usuario).subscribe((res: any) =>{
      this.userPost = res[0].nickname
    })
  }

  onToggleOptions(){
    this.showOptions=!this.showOptions;
  }
}
