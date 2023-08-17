import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rule-number',
  templateUrl: './rule-number.component.html',
  styleUrls: ['./rule-number.component.css']
})
export class RuleNumberComponent {
  @Input() currentRule!: any
}
