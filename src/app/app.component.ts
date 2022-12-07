import {Component, OnInit} from '@angular/core';
import {ItemsService} from './items.service';
import {TranslateService} from '@ngx-translate/core';
import {BreweryService} from './brewery.service';
import {BrewNotificationService} from './brew-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  breweries: any[] = []

  constructor(private translateService: TranslateService,private bn: BrewNotificationService, private bs: BreweryService) {}

  ngOnInit(): void {
    const lang: string = localStorage.getItem('lang')  ?? 'fr'
    this.translateService.use(lang)
    this.bn.notif$.subscribe(() =>{
      console.log('Call HTTP Again')
      this.bs.findAll().subscribe(bs =>  this.breweries = bs);
    })
    this.bn.notif();
  }

}
