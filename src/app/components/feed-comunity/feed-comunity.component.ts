import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ComunidadService } from 'src/app/services/comunidad.service';

@Component({
  selector: 'app-feed-comunity',
  templateUrl: './feed-comunity.component.html',
  styleUrls: ['./feed-comunity.component.css']
})
export class FeedComunityComponent {
  @Input() community : any

  constructor(
    private _communitySS: ComunidadService,
    private router: Router,
  ){

  }

  ngOnInit(){
  }

  goToCommunity(){
    this.router.navigate([`/community/${this.community.id}`]);
  }

  onClick(){
    this._communitySS.UnirseAComunidad(this.community.id).subscribe(res=>{
      console.log(res)
    })
  }
}
