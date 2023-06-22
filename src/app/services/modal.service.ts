import { EventEmitter, Injectable } from '@angular/core';
import { Modal_Account } from '../models/modal.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  $modal = new EventEmitter<Modal_Account>()
}
