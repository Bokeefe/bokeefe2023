import { Component, OnInit, Input } from '@angular/core';
import { Copy } from '../copy';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() sectionName: any;

  public copy = Copy;

  constructor() {}

  ngOnInit() {}
}
