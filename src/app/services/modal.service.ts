import { EventEmitter, Injectable } from '@angular/core';
import { Modal_Account, Modal_Option } from '../models/modal.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  $modal = new EventEmitter<Modal_Account>()
  
  $modal_option = new EventEmitter<Modal_Option>()
  
  $loading = new EventEmitter<any>()
}
