import { EventEmitter, Injectable } from '@angular/core';
import { SearchFilter } from '../models/searchfilter.model';
import { PostShowLikesService } from '../models/Post';


@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor() {
   }

  $feedFilter = new EventEmitter<SearchFilter>()

  $posts = new EventEmitter<Boolean>()

  $showLikes = new EventEmitter<PostShowLikesService>()
}