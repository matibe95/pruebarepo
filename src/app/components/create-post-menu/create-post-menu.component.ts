import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-create-post-menu',
  templateUrl: './create-post-menu.component.html',
  styleUrls: ['./create-post-menu.component.css']
})
export class CreatePostMenuComponent {
  imageFile!: {link: string, file: any, name: string};
  
  constructor(private fb: FormBuilder, private postSS: PostsService, private modalSS: ModalService){

  }

  selectedFile!: File;
  selectedImage!: File;
  imgUrl = '/assets/upload_image.png'

  closeModal(){
    this.modalSS.$modal_option.emit({state: false, type: 'main'})
  }

  onFileSelected(event: any){
    this.selectedFile = <File>event.target.files[0]
    this.selectedImage = event.srcElement.files[0];
    if (event.target.files){
      const reader = new FileReader()
       reader.readAsDataURL(event.target.files[0])
       reader.onload = (event: any) => {
        this.imgUrl = event.target.result
       }
    }
  }


  selectedOption = {
    text: {
      state: true,
      iconSize: 80,
    },
    gallery: {
      state: false,
      iconSize: 60,
    },
  }

  checkoutForm = this.fb.group({
    title: '',
    description: '',
  });
  

  onSubmit(){
    const {title, description} = this.checkoutForm.value

    const newData = {
        titulo: title!,
        descripcion: description!,
        imagen: this.selectedFile,
    }

    this.postSS.createPost(newData).subscribe({
      next: (res: any) => {
        this.closeModal()
        location.reload()
        console.log(res)
      }
    })
  }

  selectGallery(){
    this.selectedOption = {
      text: {
        state: false,
        iconSize: 60,
      },
      gallery: {
        state: true,
        iconSize: 80,
      }
    } 
  }

  selectText(){
    this.selectedOption = {
      text: {
        state: true,
        iconSize: 80,
      },
      gallery: {
        state: false,
        iconSize: 60,
      }
    } 
  }
}
