import { Component, ViewChild, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { trigger, animate,transition, style } from '@angular/animations'
import { Router } from '@angular/router';

const enterTransition = transition(':enter', [
  style({ 
    opacity:0 
  }),
  animate('500ms ease-in', style({opacity: 1}))
])
const colorRed = trigger('fadeIn', [enterTransition])

@Component({
  selector: 'modal-step',
  templateUrl: './modal-step.component.html',
  styleUrls: ['./modal-step.component.css'],
  animations: [colorRed]
})
export class ModalStepComponent {
  @ViewChild('input_info') input!: ElementRef; 
  constructor (
    private rootFormGroup: FormGroupDirective,
    private router: Router
  ){}
  @HostListener ('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (event.key === "ArrowRight"){
      if (this.content.step > 0) this.updateStep()
    }
    if (event.key === "ArrowLeft") this.changeStepEvent.emit(false);

    if (event.key === "Enter"){
      if (this.content.step > 0) this.updateStep()
    }
  }
  @Input() content: any
  @Input() currentStep!: number
  @Output() changeStepEvent = new EventEmitter<boolean>();
  buttonType: string = 'button'
  form!: FormGroup
  error: boolean = false
  routeLink: string = this.setAnchorUrl() 
  routeText: string = this.setLinkText() 

  setAnchorUrl(): string{
    const [ firstValue, page, current ]: string[] = this.router.url.split('/')
    const redirectEndPoint: string = current === 'login'
      ? 'register'
      : 'login'
    return `/${page}/${redirectEndPoint}`
  }
  
  setLinkText(): string{
    const [ firstValue, page, current ]: string[] = this.router.url.split('/')
    const linkText: string = current === 'login'
      ? 'registrate'
      : 'inicia sesión'
    return linkText
  }

  showInputError(){
    this.error = true
    setTimeout(()=> {
      this.error = false
    }, 600)
  }

  updateStep(){
    if (this.input){
      if (this.input.nativeElement.value === '') {
        return this.showInputError()
      }
    }
    this.changeStepEvent.emit(true);
  }

  ngOnInit(){
    this.form = this.rootFormGroup.control 
  }
}
