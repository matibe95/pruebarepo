import { Component, HostListener, Renderer2 } from '@angular/core';
import { Modal_Account_Icons } from '../../constants/icons';
import { FormBuilder } from '@angular/forms';
import { LOGIN_STEPS, ModalSteps } from '../../constants/modal_steps';
import { IconService } from '../../services/Icon.service';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    transform: 'translateY(50%)',
    opacity:0 
  }),
  animate('500ms ease-in-out', style({
    transform: 'translateY(0)',
    opacity: 1
  }))
])
const colorRed = trigger('fadeIn', [enterTransition])

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
  animations: [colorRed]
})
export class LoginModalComponent {

  @HostListener('document:keydown', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    if (event.key === 'Escape') this.closeModal();
  }

  checkoutForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  step: number = 0
  content: ModalSteps = LOGIN_STEPS[this.step]

  modal: any = {
    title: '¡Bienvenido a ',
    coloredWord: 'Origins',
    lastCharacter: '!'
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
    if (this.checkoutForm.value.password === ''){
      return
    }
    this.userService.addData(this.checkoutForm.value).subscribe((res) => {
      console.log(res);
    });
  }

  updateStep(newStep: any){
    if (newStep) {
      this.nextStep();
      this.content = LOGIN_STEPS[this.step]
      return;
    }
    this.prevStep();
    this.content = LOGIN_STEPS[this.step];
  }

  nextStep() {
    if (this.step + 1 > LOGIN_STEPS.length -1) return;
    this.step += 1;
  }

  prevStep() {
    if (this.step - 1 < 0) return;
    this.step -= 1;
  }
}
