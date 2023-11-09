import { Component } from '@angular/core';
import { ExplorePage_Icons } from 'src/app/constants/icons';
import { SearchFilter } from 'src/app/models/searchfilter.model';
import { IconService } from 'src/app/services/Icon.service';
import { ComunidadService } from 'src/app/services/comunidad.service';
import { EventosService } from 'src/app/services/eventos.service';
import { SearchInputService } from 'src/app/services/search-input.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-specific-search',
  templateUrl: './specific-search.component.html',
  styleUrls: ['./specific-search.component.css']
})

export class SpecificSearchComponent {
  searchFilter: SearchFilter = 'usuario';

  users: any = []
  events: any = []
  communities: any = []
  searchedData!: any

  constructor(
    private iconService: IconService,
    private searchService: SearchInputService,
    private _eventSS: EventosService,
    private userSS: UsuarioService,
    private communitySS: ComunidadService,
  ){
    this.iconService.registerIcons(ExplorePage_Icons, 'main_icons')
  }

  ngOnInit(){
    this.searchService.$searchedData.subscribe((data)=>{
      this.searchedData = data
      this.makeSearch(this.searchedData)
    })
  }

  onItemChange(target:any ){
    this.searchFilter = target.value
    this.makeSearch(this.searchedData)
  }



  makeSearch(data: string){

    if (this.searchFilter == "evento"){
      this._eventSS.searchEvent(data).subscribe({
        next:(res: any) => {
          this.events = res.data;
        }
      })
    }
    if (this.searchFilter == "usuario"){
      this.userSS.SearchUser(data).subscribe({
        next: (res:any)=>{
          this.users = res.data
        }
      })
    }
    if (this.searchFilter == "comunidad"){
      this.communitySS.BuscarComunidad(data).subscribe({
        next: (res:any)=>{
          this.communities = res.data
        }
      })
    }
  }
}
