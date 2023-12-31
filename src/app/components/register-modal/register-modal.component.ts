import { Component, HostListener, Renderer2 } from '@angular/core';
import { Modal_Account_Icons } from '../../constants/icons';
import { FormBuilder } from '@angular/forms';
import { ModalSteps, REGISTER_STEPS } from '../../constants/modal_steps';
import { IconService } from '../../services/Icon.service';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';

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
const exitTransition = transition(':leave', [
  style({
    transform: 'translateY(0%)',
    opacity: 1
  }),
  animate('500ms ease-in-out', style({
    transform: 'translateY(50%)',
    opacity: 0
  }))
])

const fadeInOut = trigger('fadeInOut', [enterTransition, exitTransition])
@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css'],
  animations:[fadeInOut]
})
export class RegisterModalComponent {
  @HostListener('document:keydown', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    if (event.key === 'Escape') this.closeModal();
  }

  checkoutForm = this.formBuilder.group({
    nickname: '',
    email: '',
    password: '',
    password_confirmation: '',
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
    private authService: AuthService,
    private loadingSS: ModalService,
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
    alert('Las contraseñas no coinciden.')
  }


  onSubmit(){
    if (this.checkoutForm.value.password_confirmation !== this.checkoutForm.value.password) {
      return this.showEmptyError()
    }
    this.registerUser(this.checkoutForm.value)
  }

  registerUser(data: any){
    this.loadingSS.$loading.emit({
      state: true
    })
    setTimeout(()=>{
      this.loadingSS.$loading.emit({
        state: false
      })
    }, 12000)
    
    this.userService.registerUser(data).subscribe((res) => {
      console.log(res);
      return this.loginUser(data)
    });
  }

  showError(){
    alert('Nos atrapaste, ocurrió un error.')
  }

  loginUser(data: any){
    this.authService.sendLogin(data).subscribe((res)=>{
      if (res.access_token){
        localStorage.setItem("accessToken", res['access_token'])
          this.authService.verificarUsuario().subscribe((res:any)=>{
            localStorage.setItem('id_user', res.id)
            this.router.navigate(['/home']);
          })
      }
    })
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
