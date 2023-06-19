import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-toggle-theme-button',
  templateUrl: './toggle-theme-button.component.html',
  styleUrls: ['./toggle-theme-button.component.css']
})  
export class ToggleThemeButtonComponent {
  
  constructor(private themeService: ThemeService){
    this.themeService.initTheme()
    this.isDarkMode = this.themeService.isDarkMode()
    this.checkThemeMode()
  }

  theme: string = ''
  isDarkMode!: boolean

  checkThemeMode(){
    this.isDarkMode 
    ? this.theme = 'theme-toggle theme-toggle--toggled'
    : this.theme = 'theme-toggle'
  }

  toggleDarkMode(){ 
    this.isDarkMode = this.themeService.isDarkMode()
    this.isDarkMode 
      ? this.setLight()
      : this.setDark()
  }

  setDark(){
    this.themeService.update('dark-mode')
    this.theme = 'theme-toggle theme-toggle--toggled'
  }
  setLight(){
    this.themeService.update('light-mode')
    this.theme = 'theme-toggle'
  }
}
