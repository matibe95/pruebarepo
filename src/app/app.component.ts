import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-origins';
  isDarkMode!: boolean;

  constructor(private themeService: ThemeService){
    this.themeService.initTheme()
    this.isDarkMode = this.themeService.isDarkMode()
  }
}
