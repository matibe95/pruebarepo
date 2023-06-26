import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal-step',
  templateUrl: './modal-step.component.html',
  styleUrls: ['./modal-step.component.css']
})
export class ModalStepComponent {
  @Input() content:any
  @Input() currentStep!: number
  @Output() changeStepEvent = new EventEmitter<boolean>();
  buttonType: string = 'button'

  updateStep(){
    if (this.content.step === 4){
      this.buttonType = 'submit'
    }
    if (this.content.step !== 4){
      this.buttonType = 'button'
    }
    this.changeStepEvent.emit(true);
  }

  ngOnInit(){
  }
}
