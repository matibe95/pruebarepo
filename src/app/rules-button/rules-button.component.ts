import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rules-button',
  templateUrl: './rules-button.component.html',
  styleUrls: ['./rules-button.component.css']
})
export class RulesButtonComponent {
  @Input() rule!: any
  @Output() changeCurrentRule = new EventEmitter<any>();
  background: String = 'bg-skin-fill'

  ngOnInit(){
    console.log(this.rule)
  }

  showThisRule(){
    this.changeCurrentRule.emit(this.rule)
  }
}
