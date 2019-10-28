import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss']
})
export class ContentContainerComponent implements OnInit {
  @Input() copy: any;

  constructor() {}

  ngOnInit() {
    console.log(this.copy);
  }
}
