import {Component, HostListener, OnInit} from '@angular/core';
import {ItemsService} from '../../../items.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss'],
  providers: [ItemsService]
})
export class BComponent implements OnInit {

  constructor(public is: ItemsService) {}

  ngOnInit(): void {
  }

  @HostListener('click')
  addHelloToService(){
    this.is.add('hello')
  }

}
