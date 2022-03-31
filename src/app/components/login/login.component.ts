import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginResponseDto } from 'src/app/auth/dto/login-response.dto';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {}
  login(formulaire: NgForm) {
    this.authService.login(formulaire.value).subscribe({
      next: (response: LoginResponseDto) => {
        localStorage.setItem('token', response.id);
        this.toaster.success('Bienvenu chez vous :)');
        this.router.navigate(['cv']);
      },
      error: (erreur) => {
        this.toaster.error('Veuillez vérifier vos credentials');
      },
    });
  }
}
