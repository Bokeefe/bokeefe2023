import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss']
})
export class ContentContainerComponent implements OnInit {
  @Input() link: string;
  @Input() title: string;
  @Input() time: string;
  @Input() role: string;

  constructor() {}

  onClickLink() {
    window.open(this.link, 'blank');
  }

  ngOnInit() {}
}
