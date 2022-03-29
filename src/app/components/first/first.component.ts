import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  name = 'aymen ';
  isHidden = false;
  constructor() {
    setInterval(() => {
      //this.name = this.name + '  1';
      this.isHidden = !this.isHidden;
    }, 1500);
  }
}
