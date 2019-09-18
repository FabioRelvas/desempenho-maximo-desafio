import { Component, OnInit, Input } from '@angular/core';

// import {faChevronDown, faChevronUp, faChevronLeft, faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  
  @Input() icon;
  @Input() iconSide = 'right';
  @Input() primaryColor = '#C9024C';
  @Input() secondaryColor = '#294050'; 
  @Input() textColor = "#FFFFFF";
  @Input() iconColor = "#FFFFFF";
  @Input() type = 'button';


  constructor() { }

  ngOnInit() {
  }

}
