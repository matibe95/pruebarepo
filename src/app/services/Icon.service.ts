
import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


@Injectable({
  providedIn: "root"
})
export class IconService {
  constructor (
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ){}

  registerIcons(iconsArray: any, subfolder: string ): void {
    this.load(iconsArray, `assets/${subfolder}`)
  }
  
  private load (iconos: any, url: string): void {
    Object.keys(iconos).forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(
          `${url}/${icon}.svg`
        )
      )
    })
  }
}