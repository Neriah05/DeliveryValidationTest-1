import { Component, OnInit } from '@angular/core';
import { DeliveryValidation } from 'src/app/models/deliveryvalidation.model';
import { DeliveryvalidationService } from 'src/app/service/deliveryvalidation.service';

@Component({
  selector: 'app-deliveryvalidation',
  templateUrl: './deliveryvalidation.component.html',
  styleUrls: ['./deliveryvalidation.component.css']
})
export class DeliveryvalidationComponent implements OnInit {

  constructor(public _deliveryvalidationService: DeliveryvalidationService) { }

  deliveryvalidations:DeliveryValidation[] = [];
  show:boolean = true;
  toggle:any = {};

  ngOnInit(): void {
    this.getalldeliveryValidation();
  }

  getalldeliveryValidation(){
    this._deliveryvalidationService.getalldeliveryValidation().subscribe( (res) => {
      this.deliveryvalidations = res.data as any[];
    },
    err => {
      console.log('API Error ' +err);
    });
  }

  showhidden(id:any){
    this.show = false;
  }

}
