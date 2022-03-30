import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lampe',
  templateUrl: './lampe.component.html',
  styleUrls: ['./lampe.component.css'],
})
export class LampeComponent implements OnInit {
  isAllume = true;
  constructor() {}
  ngOnInit(): void {
    setInterval(() => {
      this.isAllume = !this.isAllume;
      console.log(this.isAllume);
    }, 1500);
  }
  onOff() {
    this.isAllume = !this.isAllume;
    console.log(this.isAllume);
  }
}
