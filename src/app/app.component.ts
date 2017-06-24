import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public translatedText: string;
  public defaultLanguage = 'en';
  public supportedLanguages: any[];

  constructor(private _translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    _translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    _translate.use('en');
  }

  ngOnInit() {
    this._translate.setDefaultLang('en');
    this.supportedLanguages = [
      { display: 'English', value: 'en' },
      { display: 'French', value: 'fr' }
    ];
    // set current langage
    this.selectLang(this.defaultLanguage);
  }

  isCurrentLang(lang: string) {
    // check if the selected lang is current lang
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    // set current lang;
    this._translate.use(lang);
  }
}
