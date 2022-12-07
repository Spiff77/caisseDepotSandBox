import {Component, HostListener, OnInit} from '@angular/core';
import {ItemsService} from '../../../items.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss'],
})
export class AComponent implements OnInit {

  constructor(public is: ItemsService) {}

  ngOnInit(): void {
  }
  @HostListener('click')
  addHelloToService(){
    this.is.add('hello')
  }

}
