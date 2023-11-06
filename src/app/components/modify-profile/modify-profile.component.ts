import { Component, HostListener } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfile_Icons } from 'src/app/constants/icons';
import { IMAGES_URL } from 'src/app/constants/imagesUrl';
import { IconService } from 'src/app/services/Icon.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-modify-profile',
  templateUrl: './modify-profile.component.html',
  styleUrls: ['./modify-profile.component.css']
})

export class ModifyProfileComponent {
  
  imgUrl = '/assets/upload_image.png'
  mobile: Boolean = false;
  selectedFile!: File;
  telefonoParseado = ''
  
  constructor(
    private fb: FormBuilder,
    private userService: UsuarioService,
    private iconSS: IconService,
    private router: Router){
    iconSS.registerIcons(UserProfile_Icons,'main_icons')
  }
  userInfo!: any

  checkoutForm = this.fb.group({
    biografia: this.userInfo?.biografia,
    telefono: this.userInfo?.telefono,
    estudios: this.userInfo?.estudios,
    trabajo: this.userInfo?.trabajo,
    ubicacion: this.userInfo?.ubicacion,
    sexo: this.userInfo?.sexo,
  });

  

  onSubmit(){
    console.log(this.checkoutForm.value)
    const {
      biografia,
      estudios,
      sexo,
      telefono,
      trabajo,
      ubicacion
    } = this.checkoutForm.value

    const newData = {
      biografia,
      estudios,
      sexo,
      telefono,
      trabajo,
      ubicacion,
      verificado: 0,
      ocultar_likes: 0,
      recibir_recomendaciones: 0,
      foto_perfil: this.selectedFile
    }

    console.log(newData)

    this.userService.modifyUser(newData).subscribe({
      next: (res:any) => {
        alert('Cambios guardados con exito!')
        this.goBack()
      }
    })
  }

  goBack(){
    this.router.navigate([`/user/${localStorage.getItem('id_user')}`])
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


  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 750) {
      this.mobile = true
      return
    }
    this.mobile = false
  }

  ngOnInit(){
    if (window.innerWidth < 750) {
      this.mobile = true
    } else {
      this.mobile = false
    }
    this.userService.getUser(localStorage.getItem('id_user')).subscribe({
      next: (res:any) =>{
        const { user_info } = res.user
        this.userInfo = user_info
        this.imgUrl = IMAGES_URL.user + user_info.foto_perfil
        this.userInfo.telefono = this.userInfo?.telefono.toString()
        this.checkoutForm = this.fb.group({
          biografia: this.userInfo?.biografia,
          telefono: this.userInfo?.telefono,
          estudios: this.userInfo?.estudios,
          trabajo: this.userInfo?.trabajo,
          ubicacion: this.userInfo?.ubicacion,
          sexo: this.userInfo?.sexo,
        });
      }
    })
  }
  
}
