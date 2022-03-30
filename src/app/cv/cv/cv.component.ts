import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  cvs: Cv[] = [];
  selectedCv: Cv | null = null;
  constructor() {
    this.cvs = [
      new Cv(
        1,
        'sellaouti',
        'aymen',
        'teacher',
        'rotating_card_profile3.png',
        '111',
        39
      ),
      new Cv(
        2,
        'sellaouti1',
        'aymen1',
        'teacher',
        'rotating_card_profile2.png',
        '111',
        39
      ),
      new Cv(
        3,
        'sellaouti2',
        'aymen2',
        'teacher',
        'rotating_card_profile.png',
        '111',
        39
      ),
    ];
  }

  ngOnInit(): void {}
  getCv(cv: Cv): void {
    this.selectedCv = cv;
  }
}
