import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  items: string[] = ['hello']

  constructor() { }

  sayHello(){
    console.log("Hello")
  }

  add(item: string){
    this.items.push(item)
  }
}
