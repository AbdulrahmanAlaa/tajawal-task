import { Component } from '@angular/core';
import { pages } from './config/pages-config';

@Component({
  selector: 'tj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public routes = Object.keys(pages).map((key, index) => {
    return {path:pages[key].path};
  });
  
}
