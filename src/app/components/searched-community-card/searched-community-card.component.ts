import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IMAGES_URL } from 'src/app/constants/imagesUrl';

@Component({
  selector: 'app-searched-community-card',
  templateUrl: './searched-community-card.component.html',
  styleUrls: ['./searched-community-card.component.css']
})
export class SearchedCommunityCardComponent {
  @Input() community!: any

  constructor(private router: Router){

  }

  imgUrl = 'assets/default.jpg'

  ngOnInit(){
    if(this.endsWithImageExtension(this.community?.imagen)){
      this.imgUrl = IMAGES_URL.comunidad + this.community?.imagen 
    }
  }

  endsWithImageExtension(filename: string) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const lowercasedFilename = filename.toLowerCase();
  
    return imageExtensions.some(extension => lowercasedFilename.endsWith(extension));
  }

  openCommunity(){
    this.router.navigate([`/community/1`]);
  }
}
