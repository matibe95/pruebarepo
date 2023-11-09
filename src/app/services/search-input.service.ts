import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchInputService {

  constructor() { }

  $searchedData = new EventEmitter<string>()

}
