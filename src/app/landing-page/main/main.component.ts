import { Component } from '@angular/core';
import { Landing_Icons } from 'src/app/constants/icons';
import { IconService } from 'src/app/services/Icon.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'La App Para Tu'
  coloredTitle = 'Intercambio Cultural'
  description = 'Origins, una nueva aplicación que viene para innovar la forma de conocer personas de otros paises e intercambiar conocimientos y culturas.'
  buttonContent = 'Crear Cuenta'

  constructor(private iconService: IconService){
    this.iconService.registerIcons(Landing_Icons, 'landing_icons')
  }
}
