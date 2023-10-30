import { Component, Input } from '@angular/core';
import { errorCodes } from 'src/app/constants/httpErrorCodes';
import { Post_Icons } from 'src/app/constants/icons';
import { IconService } from 'src/app/services/Icon.service';
import { PostsService } from 'src/app/services/posts.service';
import { StatusService } from 'src/app/services/status.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post!: any
  isLiked: boolean = false;
  showOptions: boolean = false;
  postLikes!: any[];
  
  constructor(private iconService: IconService, private userService: UsuarioService, private postService: PostsService, private statusSS: StatusService) {
    this.iconService.registerIcons( Post_Icons ,'main_icons')
  }


  ngOnInit(){
    console.log(this.post)
    this.postLikes = this.post.like
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

  reportPost(){
    this.postService.ReportPost(this.post.id).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (e) => 
      {
        console.log(e)
      }  
    })
  }

  showLikes(){
    this.statusSS.$showLikes.emit({likes: this.postLikes, show: true})
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
    const newLikesArray = this.postLikes.filter(obj => obj.id_usuario !== localStorage.getItem('id_user'));
    this.postLikes = newLikesArray
  }

  darLikeAnimation(){
    this.post.like_count += 1
    this.isLiked = true
    this.postLikes.push({
      id: crypto.randomUUID,
      id_post: this.post.id,
      id_usuario: localStorage.getItem('id_user')
    })
  }
}
