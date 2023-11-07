import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EventosService } from 'src/app/services/eventos.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-create-event-menu',
  templateUrl: './create-event-menu.component.html',
  styleUrls: ['./create-event-menu.component.css']
})
export class CreateEventMenuComponent {

  constructor(
    private fb: FormBuilder,
    private modalSS: ModalService,
    private _eventoSS: EventosService,
  ){
  }

  checkoutForm = this.fb.group({
    nombre: '',
    descripcion: '',
    fecha: '',
    capacidad_evento: '',
  });

  selectedFile!: File;
  imgUrl = '/assets/upload_image.png'

  closeModal(){
    this.modalSS.$modal_option.emit({state: false, type: 'main'})
  }

  onSubmit(){
    const formattedDate = this.formatDateToYMDHIS(JSON.stringify(this.checkoutForm.value.fecha));
    
    const newData = {
      ...this.checkoutForm.value,
      fecha: formattedDate,
      imagen: this.selectedFile,
    }
    console.log(newData)

    this._eventoSS.createEvent(newData).subscribe(res=>{
      console.log(res)
    })
  }

  formatDateToYMDHIS(dateString: string) {
    const inputDate = new Date(dateString);
    
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, '0');
    const day = String(inputDate.getDate()).padStart(2, '0');
    const hours = String(inputDate.getHours()).padStart(2, '0');
    const minutes = String(inputDate.getMinutes()).padStart(2, '0');
    const seconds = String(inputDate.getSeconds()).padStart(2, '0');
    
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDate;
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
