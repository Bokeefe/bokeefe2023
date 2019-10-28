import { Component } from '@angular/core';
import { Copy } from './copy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  copy = Copy;
  title = `Brendan O'Keefe`;
}
