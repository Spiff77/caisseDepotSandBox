import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {BrewNotificationService} from '../brew-notification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  lang = ''

  constructor(private bn: BrewNotificationService, private ts: TranslateService) { }

  ngOnInit(): void {
    this.lang = this.ts.currentLang;
  }

  changeLang(event: any) {
    const hs:HTMLSelectElement = event
    localStorage.setItem('lang', hs.value)
    this.ts.use(event.value)
    this.bn.notif();

  }
}
