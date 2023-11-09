import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IMAGES_URL } from 'src/app/constants/imagesUrl';

@Component({
  selector: 'app-searched-user-card',
  templateUrl: './searched-user-card.component.html',
  styleUrls: ['./searched-user-card.component.css']
})
export class SearchedUserCardComponent {
  @Input() user!: any
  imgUrl!:any

  constructor(private router: Router){}

  ngOnInit(){
    console.log(this.user)
    this.imgUrl = IMAGES_URL.user + this.user.user_info.foto_perfil
  }

  openUser(){
    this.router.navigate([`/user/${this.user.id}`]);
  }
}
