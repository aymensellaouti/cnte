import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Cv[] = [];
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
      new Cv(2, 'sellaouti1', 'aymen1', 'teacher', '', '111', 39),
      new Cv(3, 'sellaouti2', 'aymen2', 'teacher', '              ', '111', 39),
    ];
   }
  getCvs(): Cv[] {
    return this.cvs;
  }
}
