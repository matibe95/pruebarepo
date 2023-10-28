import { Component, Input } from '@angular/core';
import { errorCodes } from 'src/app/constants/httpErrorCodes';
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
  isLiked: boolean = false;
  
  constructor(private iconService: IconService, private userService: UsuarioService, private postService: PostsService) {
    this.iconService.registerIcons( Post_Icons ,'main_icons')
  }

  showOptions: boolean = true

  ngOnInit(){
    this.post.like.map((item: any)=> {
      if (item.id_usuario == localStorage.getItem('id_user')) this.isLiked = true
    })
  }

  likeAction(){
    if(!this.isLiked){
      return this.likePost()
    }
    this.deleteLike()
  }

  likePost(){
      this.postService.LikePost(this.post.id)
      .subscribe({
        next: (data) => {
          this.darLikeAnimation()
        },
        error: (e) => 
        {
          console.log(e)
        }  
      })
  }

  deleteLike(){
      this.postService.DeleteLike(this.post.id)
      .subscribe({
        next: (data) => {
          this.removeLikeAnimation()
        },
        error: (e) => 
        {
          console.log(e)
        }  
      })
  }

  onToggleOptions(){
    this.showOptions=!this.showOptions;
  }

  removeLikeAnimation(){
    this.post.like_count -= 1
    this.isLiked = false
  }

  darLikeAnimation(){
    this.post.like_count += 1
    this.isLiked = true
  }
}
