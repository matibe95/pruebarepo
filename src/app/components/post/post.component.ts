import { Component, Input } from '@angular/core';
import { Post_Icons } from 'src/app/constants/icons';
import { IconService } from 'src/app/services/Icon.service';
import { PostsService } from 'src/app/services/posts.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post!: any

  
  constructor(private iconService: IconService, private userService: UsuarioService, private postService: PostsService) {
    this.iconService.registerIcons( Post_Icons ,'main_icons')
  }

  showOptions: boolean = true

  ngOnInit(){
    console.log(this.post)
  }

  likePost(){
    this.postService.LikePost(this.post.id).subscribe((res)=>{
      // console.log(res)
    })
  }

  onToggleOptions(){
    this.showOptions=!this.showOptions;
  }
}
