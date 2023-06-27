import { Component, ViewChild, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { trigger, animate,transition, style } from '@angular/animations'

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
  @Input() content:any
  @Input() currentStep!: number
  @Output() changeStepEvent = new EventEmitter<boolean>();
  buttonType: string = 'button'
  form!: FormGroup
  error: boolean = false

  @HostListener ('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    
    if (event.key === "ArrowRight"){
      if (this.content.step > 0) this.updateStep()
    }
    if (event.key === "ArrowLeft") this.changeStepEvent.emit(false);

    if (event.key === "Enter"){
      if (this.content.step > 0) this.updateStep()
    }
  }

  @ViewChild('input_info') input!: ElementRef; 
  constructor (private rootFormGroup: FormGroupDirective){}

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
    if (this.content.step === 4){
      this.buttonType = 'submit'
    }
    if (this.content.step !== 4){
      this.buttonType = 'button'
    }
    this.changeStepEvent.emit(true);
  }

  ngOnInit(){
    this.form = this.rootFormGroup.control 
  }
}
