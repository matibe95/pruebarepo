import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IMAGES_URL } from 'src/app/constants/imagesUrl';
import { ComunidadService } from 'src/app/services/comunidad.service';
import { ModalService } from 'src/app/services/modal.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-create-post-menu',
  templateUrl: './create-post-menu.component.html',
  styleUrls: ['./create-post-menu.component.css']
})
export class CreatePostMenuComponent {

  @Input() dataToModify: any
  
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

  eventos_id = ''
  comunidad_id = ''

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
  
  onChangeCommunity(){
    // console.log(this.community_id.nativeElement.value)
    this.comunidad_id = this.community_id.nativeElement.value
    this.event_id.nativeElement.value = ''
  }
  onChangeEvent(){
    this.community_id.nativeElement.value = ''
  }

  detectWhichOptionHasToBeChoose(){
    if (this.dataToModify?.image[0]?.length === 0){
      console.log('no tiene imagen')
      return this.selectText()
    }
    if (this.dataToModify?.text[0]?.length === 0){
      console.log('no tiene texto')
      return this.selectGallery()
    }
  }

  ngOnInit(){
    this.comunidadSS.ListarMisComunidades().subscribe({
      next: (value: any)=>{
        this.communitiesList = value
      }
    })

    if (this.dataToModify){
      const titulo = '' + this.dataToModify?.text[0]?.titulo
      const descripcion = '' + this.dataToModify?.text[0]?.descripcion

      if ( this.dataToModify.image[0]) this.imgUrl = IMAGES_URL.post + this.dataToModify.image[0].imagen

      this.checkoutForm = this.fb.group({
        title: titulo,
        description: descripcion,
      });

      const event_id = '' + this.dataToModify.id_evento
      const community_id = '' + this.dataToModify.id_comunidad

      if (community_id != 'null'){ 
        if (this.community_id?.nativeElement.value) this.community_id.nativeElement.value = community_id
      }

      if (event_id != 'null'){
        if (this.event_id?.nativeElement.value) this.event_id.nativeElement.value = event_id
      }
      
      this.liarForm = this.fb.group({
        event_id: event_id,
        community_id: community_id,
      });
    }

    this.detectWhichOptionHasToBeChoose()

    // if (this.dataToModify.image[0].length === undefined) {
    //   this.selectText()
    // } else {
    //   this.selectGallery()
    // }
  }

  onSubmit(){
    const {title, description} = this.checkoutForm.value

    let id_evento, id_comunidad;

    if (this.dataToModify){
      id_comunidad = this.comunidad_id
      id_evento = this.dataToModify.id_evento
    } else {
      id_evento = this.event_id?.nativeElement?.value
      id_comunidad = this.community_id?.nativeElement?.value
    }

    let newData: any = {
        id_evento,
        id_comunidad,
        titulo: title!,
        descripcion: description!,
        imagen: this.selectedFile,
    }

    if (this.dataToModify){
      if (this.dataToModify?.text[0]?.id){
        newData = {
          ...newData,
          id_texto: this.dataToModify?.text[0]?.id,
        }
      }
      if (this.dataToModify?.image[0]?.id){
        newData = {
          ...newData,
          id_imagen: this.dataToModify?.image[0]?.id,
        }
      }
    }
    
    console.log(newData)

    // if (this.dataToModify){
    //   this.postSS.ModifyPost(newData, this.dataToModify.id).subscribe({
    //     next: (res: any) => {
    //       console.log(res)
    //       // this.closeModal()
    //       location.reload()
    //     }
    //   })
    //   return;
    // }
    // this.postSS.createPost(newData).subscribe({
    //   next: (res: any) => {
    //     this.closeModal()
    //     location.reload()
    //   }
    // })
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
