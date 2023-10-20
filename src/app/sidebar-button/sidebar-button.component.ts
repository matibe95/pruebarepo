import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-button',
  templateUrl: './sidebar-button.component.html',
  styleUrls: ['./sidebar-button.component.css']
})
export class SidebarButtonComponent {
  @Input() icon!: String
  @Input() route!: String
  background: String = ''

  constructor(private router: Router ) {}

  ngOnInit(){
    if (this.router.url === this.route){
      this.background = 'bg-button-muted' 
    }
  }
}
