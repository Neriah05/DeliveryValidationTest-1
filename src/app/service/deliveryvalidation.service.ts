import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeliveryvalidationService {

  constructor(public http: HttpClient) { }

  getalldeliveryValidation(){
    return this.http.get<any>('../../assets/data/deliveryvalidation.json');
  }
}
