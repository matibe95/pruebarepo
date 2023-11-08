import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ComunidadService } from 'src/app/services/comunidad.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css']
})
export class CreateCommunityComponent {
  constructor(
    private fb: FormBuilder,
    private modalSS: ModalService,
    private _comunidadSS: ComunidadService,
  ){
  }

  checkoutForm = this.fb.group({
    nombre: '',
    descripcion: '',
  });

  selectedFile!: File;
  imgUrl = '/assets/upload_image.png'

  closeModal(){
    this.modalSS.$modal_option.emit({state: false, type: 'main'})
  }

  onSubmit(){
    
    const newData = {
      ...this.checkoutForm.value,
      imagen: this.selectedFile,
    }

    this._comunidadSS.CrearComunidad(newData).subscribe(res=>{
      next: (res: any) =>{
        this.modalSS.$modal_option.emit({state: false, type:'main'})
        alert('Comunidad creada con exito')
      }
    })
  }

  

  onFileSelected(event: any){
    this.selectedFile = <File>event.target.files[0]
    if (event.target.files){
      const reader = new FileReader()
       reader.readAsDataURL(event.target.files[0])
       reader.onload = (event: any) => {
        this.imgUrl = event.target.result
       }
    }
  }
}
