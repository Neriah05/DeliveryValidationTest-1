import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeliveryvalidationComponent } from './home/deliveryvalidation/deliveryvalidation.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: '', component: DeliveryvalidationComponent }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
