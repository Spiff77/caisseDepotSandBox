import {Component, OnInit} from '@angular/core';
import {ItemsService} from './items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {
  //  this.is.sayHello()
  }

}
