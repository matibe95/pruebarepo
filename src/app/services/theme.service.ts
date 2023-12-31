import { Injectable, Renderer2, RendererFactory2 } from '@angular/core'

@Injectable({
  providedIn: 'root' 
})

export class ThemeService{
  private renderer: Renderer2
  private colorTheme!: string;

  constructor(rendererFactory: RendererFactory2){
    this.renderer = rendererFactory.createRenderer(null, null)
  }

  initTheme(){
    this.getColorTheme()
    this.renderer.addClass(document.body, this.colorTheme)
  }

  update(theme: 'dark-mode' | 'light-mode') {
    this.setColorTheme(theme)

    const previousColorTheme = 
      theme === 'dark-mode' 
        ? 'light-mode' 
        : 'dark-mode'
    this.renderer.removeClass(document.body, previousColorTheme)
    this.renderer.addClass(document.body, theme)
    // document.documentElement.style.setProperty('color-scheme', theme.split('-')[0])
  }

  isDarkMode(){
    return this.colorTheme === 'dark-mode'
  }

  private setColorTheme(theme: string) {
    this.colorTheme = theme
    localStorage.setItem('user-theme', theme)
  }

  getColorTheme(){
    if (localStorage.getItem('user-theme')){
      this.colorTheme = localStorage.getItem('user-theme')!
      return this.colorTheme;
    }
    this.colorTheme = 'light-mode'
    return this.colorTheme;
  }
}