import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-block',
  templateUrl: './side-block.component.html',
  styleUrls: ['./side-block.component.scss']
})
export class SideBlockComponent implements OnInit {
  @Input() background;
  @Input() actionBlockIcon;
  @Input() actionBlockText;

  constructor() { }

  ngOnInit() {
  }

}
