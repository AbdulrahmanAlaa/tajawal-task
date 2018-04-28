import { Component, OnInit } from '@angular/core';
import { pages } from './config/pages-config';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGES, DEFAULT_LANGUAGE } from './config/defines';

@Component({
  selector: 'tj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    // Loading initial language
    this.translate.addLangs(LANGUAGES);
    this.translate.setDefaultLang(DEFAULT_LANGUAGE);
    this.translate.use(DEFAULT_LANGUAGE);
  }

  //Load Navigation links from pages config
  public routes = Object.keys(pages).map((key, index) => {
    return { path: pages[key].path };
  });

}
