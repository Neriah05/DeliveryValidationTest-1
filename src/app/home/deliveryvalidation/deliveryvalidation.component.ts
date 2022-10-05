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
  hide:boolean = true;
  toggle:any = {};
  idhide:any='';

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

  showhidden(id:number){
    this.hide = false;
    //this.idhide = id;
    if(this.deliveryvalidations[id].state == false){
      this.deliveryvalidations[id].state = true;
    }
    else{
      this.deliveryvalidations[id].state = false;
    }
  }

}
