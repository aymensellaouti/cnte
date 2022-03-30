import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-somme',
  templateUrl: './somme.component.html',
  styleUrls: ['./somme.component.css'],
})
export class SommeComponent implements OnInit {
  @Input() entier1 = 0;
  @Input() entier2 = 0;
  constructor() {}

  ngOnInit(): void {}
}
