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
  searchFilter: SearchFilter = 'post';

  onItemChange(target:any ){
    this.searchFilter = target.value
  }

  users: any = [1]
  events: any = [1]
  communities: any = []

  constructor(
    private iconService: IconService,
    private searchService: SearchInputService,
    private eventSS: EventosService,
    private userSS: UsuarioService,
    private communitySS: ComunidadService,
  ){
    this.iconService.registerIcons(ExplorePage_Icons, 'main_icons')
  }

  ngOnInit(){
    this.searchService.$searchedData.subscribe((data)=>{
      this.makeSearch(data)
    })
  }


  makeSearch(data: string){

    // console.log(this.searchFilter)
    // if (this.searchFilter == "evento"){
    //   this.eventSS.searchEvent(data)
    // }
    // if (this.searchFilter == "usuario"){
    //   this.userSS.searchCommunity(data)
    // }
    if (this.searchFilter == "comunidad"){
      this.communitySS.BuscarComunidad(data).subscribe({
        next: (res:any)=>{
          console.log(res)
          this.communities = res.data
        }
      })
    }
  }
}
