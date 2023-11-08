import { Component, Input } from '@angular/core';
import { errorCodes } from 'src/app/constants/httpErrorCodes';
import { Post_Icons } from 'src/app/constants/icons';
import { IMAGES_URL } from 'src/app/constants/imagesUrl';
import { Modal_Option } from 'src/app/models/modal.model';
import { IconService } from 'src/app/services/Icon.service';
import { ModalService } from 'src/app/services/modal.service';
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

  selectedOption = {
    text: {
      state: false,
      iconSize:'w-[50px] h-[50px]',
    },
    gallery: {
      state: true,
      iconSize: 'w-[65px] h-[65px]',
    },
  }

  postAuthor!: boolean

  
  postContent = {
    text: true,
    picture: true,
  }

  imageName = ''
  @Input() profilePictureImage!: any
  postImageUrl!: any

  constructor(
    private iconService: IconService,
    private userService: UsuarioService,
    private postService: PostsService,
    private statusSS: StatusService,
    private _modalOptionSS: ModalService,
  ) {
    this.iconService.registerIcons( Post_Icons ,'main_icons')
  }


  ngOnInit(){
    this.postImageUrl = IMAGES_URL.post + this.post?.image[0]?.imagen

    this.postAuthor = this.checkIfPostIsFromUser(this.post.id_usuario)
    if(this.profilePictureImage){
      this.imageName = this.profilePictureImage
    } else {
      if (this.post?.user?.user_info.foto_perfil !== null){
        this.imageName =  IMAGES_URL.user + this.post?.user?.user_info.foto_perfil
      }
    }

    this.postLikes = this.post.like
    
    
    if (this.post?.image.length === 0){
      this.selectedOption.gallery.state = false
      this.postContent.picture = false
      this.selectText()
      this.postContent.text = true
    }
    
    if (this.post?.text.length === 0){
      this.selectImage()
      this.selectedOption.text.state = false
      this.postContent.text = false
      this.selectedOption.gallery.state = true
      this.postContent.picture = true
    }
    
    this.post.like.map((item: any)=> {
      if (item.id_usuario == localStorage.getItem('id_user')) this.isLiked = true
    })
  }

  checkIfPostIsFromUser(idUser: any){
    if (idUser == localStorage.getItem('id_user')) return true
    return false
  }

  modifyPost(){
    this._modalOptionSS.$modal_option.emit({state:true, type:'post', data: this.post})
  }
  
  deletePost(){
    this.postService.DeletePost(this.post.id).subscribe({
      next: (res:any)=>{
        alert('post eliminado correctamente')
        location.reload()
      }
    })
  }

  selectImage(){
    this.selectedOption = {
      text: {
        state: false,
        iconSize:'w-[50px] h-[50px]',
      },
      gallery: {
        state: true,
        iconSize: 'w-[65px] h-[65px]',
      }
    } 
  }

  selectText(){
    this.selectedOption = {
      text: {
        state: true,
        iconSize: 'w-[65px] h-[65px]',
      },
      gallery: {
        state: false,
        iconSize: 'w-[50px] h-[50px]',
      }
    } 
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
