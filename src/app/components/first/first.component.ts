import { Component } from '@angular/core';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  name = 'aymen ';
  isHidden = false;
  message = '';
  constructor() {}
  showHide() {
    this.isHidden = !this.isHidden;
  }
  modifyMessage(newMessage: string) {
    this.message = newMessage;
  }
}
