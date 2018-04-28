import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGES, DEFAULT_LANGUAGE } from './config/defines';

@Component({
  selector: 'tj-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  //Load Navigation links from pages config
  public routes = [];

  /**
   * parameters passed by angular Dependency Injection 
   * @param translate  
   */
  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    //Configure the Language to be English by default
    this.translate.addLangs(LANGUAGES);
    this.translate.setDefaultLang(DEFAULT_LANGUAGE);
    this.translate.use(DEFAULT_LANGUAGE);
    this.translate.get('common.pages').subscribe((val) => {
      this.routes = Object.keys(val).map((key, index) => {
        return { path: val[key].path, name: val[key].name };
      });
    });
  }

  languageChanged(language){
     //Configure the Language to be English by default
     this.translate.use(language);
     this.translate.get('common.pages').subscribe((val) => {
      this.routes = Object.keys(val).map((key, index) => {
        return { path: val[key].path, name: val[key].name };
      });
    });
  }

}
