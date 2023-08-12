import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    //that is the implementation of 2 languages localizaion and works fine but filling the 2 json files takes too long
    // this.translate.setDefaultLang('en');
    // this.translate.use('ar');
  }
}
