import { Component } from '@angular/core';
import { IconService } from '../services/Icon.service';
import { NavBar_Icons } from '../constants/icons';
import { ModalService } from '../services/modal.service';
import { Modal_Option, OptionType } from '../models/modal.model';
import { FormBuilder } from '@angular/forms';
import { RULES_STEPS, ModalRules } from '../constants/modal_steps';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'desktop-upload-modal',
  templateUrl: './desktop-upload-modal.component.html',
  styleUrls: ['./desktop-upload-modal.component.css']
})
export class DesktopUploadModalComponent {
  constructor(
    private iconService: IconService,
    private modalSS: ModalService,
    private formBuilder: FormBuilder,
    private eventosSS: EventosService){
    this.iconService.registerIcons( NavBar_Icons ,'main_icons')
  }

  checkoutForm = this.formBuilder.group({
    name: null,
    image: null,
    description: null,
    date: null,
    rule_1: '',
    content_1: '',
    rule_2: '',
    content_2: '',
    rule_3: '',
    content_3: '',
    rule_4: '',
    content_4: '',
    rule_5: '',
    content_5: '',
    rule_6: '',
    content_6: '',
    rule_7: '',
    content_7: '',
    rule_8: '',
    content_8: '',
    rule_9: '',
    content_9: '',
    // location: null,
    // rules: []
  });

  steps: 0 | 1 = 0
  url = './assets/main_icons/gallery.svg'
  rules: Array<any> = [
  ]

  optionSelected: Modal_Option = {
    state: true,
    type: 'post'
  }

  currentRule: any = {
    number: 0,
    name: null,
    content: null
  }

  content: ModalRules = RULES_STEPS[this.currentRule.number]
  

  selectedFile!: File;

  onFileSelected(event: any){
    this.selectedFile = <File>event.target.files[0]
    if (event.target.files){
      const reader = new FileReader()
       reader.readAsDataURL(event.target.files[0])
       reader.onload = (event: any) => {
        this.url = event.target.result
       }
    }
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
    this.currentRule = ruleToShow
    this.content = RULES_STEPS[this.currentRule.number]
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

  // ngOnDestroy(){
  //   this.modalSS.$modal_option.unsubscribe()
  // }

  openSectionModal(option: OptionType){
    this.modalSS.$modal_option.emit({state: true, type: option})
  }


  onSubmitEvent(){
    console.log(this.checkoutForm.value)
    const data = null
    this.eventosSS.createEvent(data).subscribe((res)=>{
      console.log(res)
    })
    this.closeModal()
  }

  goToRules(){
    for (const item of Object.values(this.checkoutForm.value)) {
      if (item === null || item === undefined){
        return this.showError(); 
      }
    }
    this.nextStep()
  }

  nextStep(){
    this.steps = 1
  }
  
  prevStep(){
    this.steps = 0
  }

  showError(){
    alert('Rellene todos los campos antes de continuar')
  }
}
