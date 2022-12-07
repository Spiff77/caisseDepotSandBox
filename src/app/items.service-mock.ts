import { Injectable } from '@angular/core';

@Injectable()
export class ItemsServiceMock {

  items: string[] = ['Salut']

  constructor() { }

  sayHello(){
    console.log("Salut")
  }

  add(item: string){
    this.items.push(item)
  }
}
