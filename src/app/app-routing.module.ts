import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerRegisterComponent } from './seller-register/seller-register.component';
import { VolumeShipmentComponent } from './volume-shipment/volume-shipment.component';
import { FormConfirmationComponent } from './form-confirmation/form-confirmation.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registrar-vendedor', component: SellerRegisterComponent },
  { path: 'enviar-volume', component: VolumeShipmentComponent },
  { path: 'confirma', component: FormConfirmationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
