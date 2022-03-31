import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent implements OnInit {
  cv: Cv | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((mesParams) => {
      this.cvService.getCvById(+mesParams['id']).subscribe({
        next: (cv) => {
          this.cv = cv;
        },
        error: () => {
          this.router.navigate(['cv']);
        },
      });
    });
    this.activatedRoute.queryParams.subscribe((mesQP) => {
      console.log(mesQP);
    });
  }
  deleteCv() {
    if (this.cv) {
      const message = `Le cv de ${this.cv.firstname} ${this.cv.name} a été supprimé avec succès`;
      this.cvService.deleteCvById(this.cv.id).subscribe({
        next: () => {
          this.router.navigate(['cv']);
          this.toastr.success(message);
        },
        error: (erreur) => {
          console.log(erreur);
        },
      });
    }
  }
}
