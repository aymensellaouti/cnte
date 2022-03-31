import { Component, OnInit, ViewChild } from '@angular/core';
import { Cv } from '../model/cv';
import { DetailComponent } from '../detail/detail.component';
import { LoggerService } from '../../services/logger.service';
import { SayHelloService } from '../../services/say-hello.service';
import { CvService } from '../services/cv.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  /* @ViewChild('myP') p = ''; */
  cvs: Cv[] = [];
  date = new Date();
  selectedCv: Cv | null = null;
  /*   helloService = new SayHelloService(); */
  constructor(
    private loggerService: LoggerService,
    private helloService: SayHelloService,
    private cvService: CvService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loggerService.log('cc je suis le cvComponent');
    this.helloService.hello();
    this.cvs = this.cvService.getCvs();
    this.toastr.info('Bienvenu chez CvTech');
  }
  getCv(cv: Cv): void {
    this.selectedCv = cv;
  }
  naviguer() {
    this.router.navigate(['todo']);
  }
}
