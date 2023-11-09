import { Component } from '@angular/core';
import { IconService } from '../services/Icon.service';
import { Desktop_Header } from '../constants/icons';
import { SearchFilter } from '../models/searchfilter.model';
import { ConfigService } from '../services/config.service';
import { StatusService } from '../services/status.service';

@Component({
  selector: 'filters-header',
  templateUrl: './filters-header.component.html',
  styleUrls: ['./filters-header.component.css']
})
export class FiltersHeaderComponent {
  constructor(private iconService: IconService, private statusSS: StatusService){
    this.iconService.registerIcons(Desktop_Header, 'main_icons')
  }

  feedOption: SearchFilter = 'post';

  onItemChange(target:any ){
    this.feedOption = target.value
    this.statusSS.$feedFilter.emit(this.feedOption)
  }

  refreshPosts(){
    this.statusSS.$posts.emit(true)
  }
}
