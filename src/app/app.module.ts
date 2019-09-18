import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ActionBlockComponent } from './action-block/action-block.component';
import { StepComponent } from './step/step.component';
import { ButtonComponent } from './button/button.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEdit, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SellerRegisterComponent } from './seller-register/seller-register.component';
import { SideBlockComponent } from './side-block/side-block.component';
import { VolumeShipmentComponent } from './volume-shipment/volume-shipment.component';
import { FormConfirmationComponent } from './form-confirmation/form-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionBlockComponent,
    StepComponent,
    ButtonComponent,
    HomeComponent,
    FooterComponent,
    SellerRegisterComponent,
    SideBlockComponent,
    VolumeShipmentComponent,
    FormConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faEdit, faCheckCircle);
  }

}
