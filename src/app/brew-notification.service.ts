import { Injectable } from '@angular/core';
import {Observable, Subject, SubjectLike} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrewNotificationService {

  notif$: Subject<void> = new Subject<void>();

  constructor() { }

  notif(){
    this.notif$.next();
  }
}
