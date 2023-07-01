import { Component, HostListener, Renderer2 } from '@angular/core';
import { Modal_Account_Icons } from '../constants/icons';
import { FormBuilder } from '@angular/forms';
import { ModalSteps, REGISTER_STEPS } from '../constants/modal_steps';
import { IconService } from '../services/Icon.service';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent {
  @HostListener('document:keydown', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    if (event.key === 'Escape') this.closeModal();
  }

  checkoutForm = this.formBuilder.group({
    name: '',
    email: '',
    password: '',
    password_confirmed: '',
  });

  step: number = 0
  content: ModalSteps = REGISTER_STEPS[this.step]

  modal: any = {
    title: '¿Primera vez? Unete ',
    coloredWord: '¡Ya!',
    lastCharacter: ''
  }

  constructor(
    private iconService: IconService,
    private renderer: Renderer2,
    private formBuilder: FormBuilder,
    private userService: UsuarioService,
    private router: Router
  ) {
    this.renderer.listen('window', 'click', (e: any) => {
      if (e.target.id === 'modal_container') {
        this.closeModal();
      }
    });
    this.iconService.registerIcons(Modal_Account_Icons, 'landing_icons');
  }


  closeModal(){ 
    this.router.navigate(['/welcome']);
  }

  showEmptyError(){
    alert('las contraseñas no son iguales mano')
  }


  onSubmit(){
    if (this.checkoutForm.value.password_confirmed !== this.checkoutForm.value.password) {
      return this.showEmptyError()
    }
    this.userService.addData(this.checkoutForm.value).subscribe((res) => {
      console.log(res);
    });
  }

  updateStep(newStep: any){
    if (newStep) {
      this.nextStep();
      this.content = REGISTER_STEPS[this.step]
      return;
    }
    this.prevStep();
    this.content = REGISTER_STEPS[this.step];
  }

  nextStep() {
    if (this.step + 1 > REGISTER_STEPS.length -1) return;
    this.step += 1;
  }

  prevStep() {
    if (this.step - 1 < 0) return;
    this.step -= 1;
  }
}
