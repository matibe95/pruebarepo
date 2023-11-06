import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ComunidadService } from 'src/app/services/comunidad.service';
import { ModalService } from 'src/app/services/modal.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-create-post-menu',
  templateUrl: './create-post-menu.component.html',
  styleUrls: ['./create-post-menu.component.css']
})
export class CreatePostMenuComponent {

  
  imageFile!: {link: string, file: any, name: string};
  
  constructor(
    private fb: FormBuilder,
    private postSS: PostsService,
    private modalSS: ModalService,
    private comunidadSS: ComunidadService,
  ){
  }

  @ViewChild('event_id') event_id !:ElementRef;
  @ViewChild('community_id') community_id !:ElementRef;

  selectedFile!: File;
  selectedImage!: File;
  imgUrl = '/assets/upload_image.png'
  communitiesList!: any[]
  eventsList!: any[]

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
      iconSize: 'w-[80px] h-[80px]',
    },
    gallery: {
      state: false,
      iconSize: 'w-[60px] h-[60px]',
    },
    options: {
      state: false,
      iconSize: 'w-[60px] h-[60px]',
    },
  }

  checkoutForm = this.fb.group({
    title: '',
    description: '',
  });

  liarForm = this.fb.group({
    event_id: '',
    community_id: '',
  });
  
  

  onSubmit(){

    const {title, description} = this.checkoutForm.value

    const newData = {
        event_id: this.event_id?.nativeElement?.value,
        community_id: this.community_id?.nativeElement?.value,
        titulo: title!,
        descripcion: description!,
        imagen: this.selectedFile,
    }

    this.postSS.createPost(newData).subscribe({
      next: (res: any) => {
        this.closeModal()
        location.reload()
      }
    })
  }

  onChangeCommunity(){
    this.event_id.nativeElement.value = ''
  }
  onChangeEvent(){
    this.community_id.nativeElement.value = ''
    
  }

  ngOnInit(){
    this.comunidadSS.ListarMisComunidades().subscribe({
      next: (value: any)=>{
        console.log(value)
        this.communitiesList = value
      }
    })
  }

  selectGallery(){
    this.selectedOption = {
      text: {
        state: false,
        iconSize: 'w-[60px] h-[60px]',
      },
      gallery: {
        state: true,
        iconSize: 'w-[80px] h-[80px]',
      },
      options: {
        state: false,
        iconSize: 'w-[60px] h-[60px]',
      },
    } 
  }

  selectOptions(){
    this.selectedOption = {
      text: {
        state: false,
        iconSize: 'w-[60px] h-[60px]',
      },
      gallery: {
        state: false,
        iconSize: 'w-[60px] h-[60px]',
      },
      options: {
        state: true,
        iconSize: 'w-[80px] h-[80px]',
      },
    } 
  }
  selectText(){
    this.selectedOption = {
      text: {
        state: true,
        iconSize: 'w-[80px] h-[80px]',
      },
      gallery: {
        state: false,
        iconSize: 'w-[60px] h-[60px]',
      },
      options: {
        state: false,
        iconSize: 'w-[60px] h-[60px]',
      },
    } 
  }
}
