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
  //   if (event.target.files && event.target.files[0]) {
  //     const reader = new FileReader();

  //     reader.onload = (_event: any) => {
  //         this.imageFile = {
  //             link: _event.target.result,
  //             file: event.srcElement.files[0],
  //             name: event.srcElement.files[0].name
  //         };
  //         this.imgUrl = event.target.result
  //     };
  //     reader.readAsDataURL(event.target.files[0]);
  // }
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

    
    
    const newText = [{
      titulo: title!,
      descripcion: description!,
      orden: 1!
    }]
    
    // formData.append('imagen', this.selectedImage, this.selectedImage.name)

    // formData.append('imagen', this.selectedFile, this.selectedFile.name)
    // formData.append('texto', JSON.stringify(newText))
    // // formData.append('imagen', this.imageFile.file);
    // formData.append('imagen', this.selectedFile);
    // formData.append('description', description!)
    
    // formData.forEach((el, key)=>{
      //   console.log(key)
    //   console.log(el)
    // })

    const newImage = [{
      imagen: this.selectedFile,
      orden: 1!
    }]
    
    // formData.append('imagen', JSON.stringify))


    const newData = {
        texto: [{
          titulo: title!,
          descripcion: description!,
        }],
        imagen: this.selectedFile,
    }

    // console.log(this.selectedFile)

    // console.log(formData)

    // formData.forEach((el, key)=>{
    //   console.log(el, key)
    // })

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
