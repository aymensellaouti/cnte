import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class SayHelloService {

  constructor(
    private loggerService: LoggerService
  ) { }
  hello(): void {
 /*    console.log('Hello'); */
    this.loggerService.log('Hello');

  }
}
