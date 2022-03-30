import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css'],
})
export class NgstyleComponent implements OnInit {
  color = 'lightblue';
  bgc = 'gold';
  size = 75;
  font = 'arial';
  align = 'center';
  constructor() {}

  ngOnInit(): void {}
  aligner(alignement: string): void {
    this.align = alignement;
  }
}
