import { Component } from '@angular/core';
import { PostMenu_Icons } from 'src/app/constants/icons';
import { IconService } from 'src/app/services/Icon.service';
// import { FormBuilder } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}


@Component({
  selector: 'app-post-menu',
  templateUrl: './post-menu.component.html',
  styleUrls: ['./post-menu.component.css']
})
export class PostMenuComponent {
  constructor(
    private iconService: IconService,
    private formBuilder: FormBuilder,
    private postService: PostsService
  ){
    this.iconService.registerIcons( PostMenu_Icons ,'main_icons')
  }

  form!: FormGroup
  url = './assets/main_icons/plus.svg'
  checkoutForm = this.formBuilder.group({
    description: '',
    imagen: '',
    // password: '',
  });

  selectedFile!: File;

  onFileSelected(event: any){
    this.selectedFile = <File>event.target.files[0]
    if (event.target.files){
      const reader = new FileReader()
       reader.readAsDataURL(event.target.files[0])
       reader.onload = (event: any) => {
        this.url = event.target.result
       }
    }
  }

  onSubmit(){
    const arrayImg = [
      this.selectedFile.name,
    ]

    const data = {
      id_usuario: 1,
      descripcion: this.checkoutForm.value.description, 
      imagen: arrayImg
    }

    this.postService.createPost(data).subscribe(()=>{
      window.location.reload()
    })
  }

  loadPost: boolean = false

  showLoadPostMenu(){
    this.loadPost = true
  }
}
