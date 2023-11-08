import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IMAGES_URL } from 'src/app/constants/imagesUrl';
import { ComunidadService } from 'src/app/services/comunidad.service';

@Component({
  selector: 'app-feed-comunity',
  templateUrl: './feed-comunity.component.html',
  styleUrls: ['./feed-comunity.component.css']
})
export class FeedComunityComponent {
  @Input() community : any

  imgUrl = 'assets/default_community.png'

  constructor(
    private _communitySS: ComunidadService,
    private router: Router,
  ){

  }

  ngOnInit(){
    if (this.community.imagen){
      this.imgUrl = IMAGES_URL.comunidad + this.community.imagen
    }
  }

  goToCommunity(){
    this.router.navigate([`/community/${this.community.id}`]);
  }

  onClick(){
    this._communitySS.SalirDeComunidad(this.community.id).subscribe(res=>{
      next: (res:any)=>{
        alert('Has abandonado la comunidad con exito')
        location.reload()

      }
    })
  }
}
