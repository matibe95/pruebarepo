import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-loading-modal',
  templateUrl: './loading-modal.component.html',
  styleUrls: ['./loading-modal.component.css']
})
export class LoadingModalComponent {
  loading: boolean = false

  constructor(private loadingSS: ModalService){}

  ngOnInit(){
    this.loadingSS.$loading.subscribe((res)=>{
      this.loading = res.state
    })
  }
}