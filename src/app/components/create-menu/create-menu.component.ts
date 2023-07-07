import { Component, EventEmitter, Output, Type } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    opacity:0 
  }),
  animate('500ms ease-in-out', style({
    opacity: 1
  }))
])
const fadeIn = trigger('fadeIn', [enterTransition])

type MenuType = 'post' | 'event' | 'community'

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css'],
  animations: [fadeIn]
})
export class CreateMenuComponent {
  @Output() changeStepEvent = new EventEmitter<boolean>();
  menuType!: MenuType

  nextStep(){
    this.menuType = 'post'
    this.changeStepEvent.emit(true);
  }
}
