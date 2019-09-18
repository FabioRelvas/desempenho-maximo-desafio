import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.scss']
})
export class SellerRegisterComponent implements OnInit {

  registerForm = new FormGroup(
    {
      cpf: new FormControl(''),
      nome: new FormControl(''),
      cnpj: new FormControl(''),
      razaoSocial: new FormControl(''),
      uf: new FormControl(''),
      email: new FormControl(''),
      telefone: new FormControl(''),
    }
  );

  showConfirmation = false;

  constructor() { }

  ngOnInit() {
  }

  sendEmail() {
    console.log(this.registerForm.value);
    
    if (this.registerForm.valid) {
      setTimeout(() => {
        this.showConfirmation = true;
      }, 3000);
    }
}

}
