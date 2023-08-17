import { Component } from '@angular/core';
import { IconService } from '../services/Icon.service';
import { NavBar_Icons } from '../constants/icons';
import { ModalService } from '../services/modal.service';
import { Modal_Option } from '../models/modal.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'desktop-upload-modal',
  templateUrl: './desktop-upload-modal.component.html',
  styleUrls: ['./desktop-upload-modal.component.css']
})
export class DesktopUploadModalComponent {
  constructor(private iconService: IconService, private modalSS: ModalService, private formBuilder: FormBuilder){
    this.iconService.registerIcons( NavBar_Icons ,'main_icons')
  }

  checkoutForm = this.formBuilder.group({
    name: null,
    description: null,
    date: null,
    // location: null,
    // rules: []
  });

  steps: 0 | 1 = 1

  rules: Array<any> = [
  ]

  optionSelected: Modal_Option = {
    state: true,
    type: 'event'
  }

  currentRule: any = {
    number: null,
    name: null,
    content: null
  }

  addNewRule(){
    const numeroReglaNueva = this.rules.length + 1
    if (numeroReglaNueva > 9) return
    this.rules.push(
      {
        number: numeroReglaNueva,
        name: this.currentRule.name,
        content: this.currentRule.content,
      }
    )
  }

  showRule(ruleToShow:any){
    console.log(ruleToShow)
    this.currentRule = ruleToShow
  }

  ngOnInit(){
    this.modalSS.$modal_option.subscribe((value)=>{
      const {state, type} = value
      this.optionSelected = {state, type}
    })
  }

  closeModal(){
    this.modalSS.$modal_option.emit({state: false})
  }

  ngOnDestroy(){
    this.modalSS.$modal_option.unsubscribe()
  }

  openEventModal(){
    this.modalSS.$modal_option.emit({state: true, type:"event"})
  }

  onSubmit(){
    for (const item of Object.values(this.checkoutForm.value)) {
      if (item === null || item === undefined){
        return this.showError(); 
      }
    }
    this.goToCreateRules()
  }

  goToCreateRules(){
    this.steps = 1
  }

  showError(){
    alert('Rellene todos los campos antes de continuar')
  }
}
