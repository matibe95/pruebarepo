import { Component, Input, HostListener, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Modal_Account_Icons } from '../constants/icons';
import { Modal_Account } from '../models/modal.model';
import { IconService } from '../services/Icon.service';
import { ModalService } from '../services/modal.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent {  
  @Input() modal!: Modal_Account
  
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === "Escape") this.closeModal()
    if (event.key === "ArrowRight"){
      if (this.step > 0) this.nextStep()
    }
    if (event.key === "ArrowLeft") this.prevStep()
    if (event.key === "Enter"){
      event.preventDefault()
      if (this.step > 0) this.nextStep()
    }
  }

  constructor(
    private modalSS: ModalService, 
    private iconService: IconService, 
    private renderer: Renderer2,
    private formBuilder: FormBuilder,
    private userService: UsuarioService,
  ){
      this.renderer.listen('window', 'click', (e: any) => {
        if (e.target.id === 'modal_container'){
          this.closeModal()
        }
      });
      this.iconService.registerIcons(Modal_Account_Icons, 'landing_icons')
  }

  step: number = 0
  checkoutForm = this.formBuilder.group({
    name: '',
    email: '',
    password: '',
    password_confirmed: '',
  })

  onSubmit(): void {
    this.userService.addData(this.checkoutForm.value)
      .subscribe((res)=>{
        console.log(res)
      })
  }
  
  ngOnInit(){
    this.fillModal()
  }

  fillModal(){
    this.modal.lastCharacter = this.modal.originalTitle?.substring(this.modal.originalTitle.length - 1)
    const coloredWord = this.modal.coloredWord!
    const lastCharacter = this.modal.lastCharacter!
    this.modal.title = this.modal.originalTitle?.replace(coloredWord + lastCharacter, '')
    
  }
  
  closeModal(){
    this.modalSS.$modal.emit({
      state: false
    })
  }

  nextStep(){
    if (this.step + 1 > 4) return;
    this.step += 1
  }

  prevStep(){
    if (this.step - 1 < 0) return;
    this.step -= 1
  }
}
