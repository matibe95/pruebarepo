
import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Icons } from "../constants/icon";


@Injectable({
  providedIn: "root"
})
export class IconService {
  constructor (
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ){}

  registerIcons(): void {
    this.load(Icons, 'assets/landing_icons')
  }
  
  private load (iconos: typeof Icons, url: string): void {
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