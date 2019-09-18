import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-block',
  templateUrl: './action-block.component.html',
  styleUrls: ['./action-block.component.scss']
})
export class ActionBlockComponent implements OnInit {
  @Input() icon;
  @Input() text;
  @Input() background = '';


  constructor() { }

  ngOnInit() {
  }

}
