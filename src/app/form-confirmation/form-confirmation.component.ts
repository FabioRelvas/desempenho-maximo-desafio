import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-confirmation',
  templateUrl: './form-confirmation.component.html',
  styleUrls: ['./form-confirmation.component.scss']
})
export class FormConfirmationComponent implements OnInit {

  @Input() primaryColor = '#C9024C';
  @Input() secondaryColor = '#294050';
  @Input() confirmationText;

  constructor() { }

  ngOnInit() {
  }

}
