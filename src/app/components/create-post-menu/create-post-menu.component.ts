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
  
  constructor(private fb: FormBuilder, private postSS: PostsService, private modalSS: ModalService){

  }

  selectedFile!: File;
  selectedImage!: File;
  imgUrl = 'https://via.placeholder.com/372x257'

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
    const formData = new FormData()

    
    // formData.append('imagen', this.selectedImage, this.selectedImage.name)


    const newText = [{
        titulo: title!,
        descripcion: description!,
        orden: 1!
    }]

    // formData.append('imagen', this.selectedImage, this.selectedImage.name)
    // formData.append('texto', 'matibecrack')
    // formData.append('description', description!)

    // formData.forEach((el, key)=>{
    //   console.log(key)
    //   console.log(el)
    // })
    const newData = {
      texto: [{
        titulo: title!,
        descripcion: description!,
        orden: 1!
      }],
      // imagen: [{
      //   imagen: this.selectedImage,
      //   orden: 1!
      // }]
    }

    this.postSS.createPost(newData).subscribe((res)=>{
      console.log(res)
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
