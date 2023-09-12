import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-rule-number',
  templateUrl: './rule-number.component.html',
  styleUrls: ['./rule-number.component.css']
})
export class RuleNumberComponent {
  @Input() currentRule!: any
  @Input() content!: any

  constructor(private rootFormGroup: FormGroupDirective){}
  form!: FormGroup

  ngOnInit(){
    this.form = this.rootFormGroup.control 
  }
}
