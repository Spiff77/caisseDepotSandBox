import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const secureReq = request.clone({
      url: request.url.replace('http://', 'https://')
    })
    console.log('Heyyyy url changed:', secureReq.url)
    return next.handle(secureReq);
  }
}
