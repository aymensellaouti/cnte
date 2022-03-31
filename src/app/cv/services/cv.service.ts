import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cv } from '../model/cv';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const CV_API = 'https://immense-citadel-91115.herokuapp.com/api/personnes/';
@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  constructor(private http: HttpClient) {
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
  getFakeCvs(): Cv[] {
    return this.cvs;
  }
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(CV_API);
  }
  getFakeCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id == id) ?? null;
  }
  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(CV_API + id);
  }
  deleteCvById(id: number): Observable<any> {
/*     const params = new HttpParams().set('access_token', localStorage.getItem('token') ?? ''); */
      const headers = new HttpHeaders().set('Authorization', localStorage.getItem('token') ?? '');
      return this.http.delete<any>(CV_API + id, {headers});
  }
  deleteFakeCvById(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index > -1) {
      this.cvs.splice(index, 1);
    }
    return false;
  }
}
