import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-volume-shipment',
  templateUrl: './volume-shipment.component.html',
  styleUrls: ['./volume-shipment.component.scss']
})
export class VolumeShipmentComponent implements OnInit {

volumeForm = new FormGroup(
  {
    cpf: new FormControl(''),
    notaFiscal: new FormControl(''),
    volume: new FormControl(''),
    dataVenda: new FormControl(''),
    fotoNota: new FormControl(''),
  }
);

showConfirmation = false;

constructor() { }

ngOnInit() {
}

sendVolume() {
  console.log(this.volumeForm.value);
  
  if (this.volumeForm.valid) {
    setTimeout(() => {
      this.showConfirmation = true;
    }, 3000);
  }
}
}
