import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CredentialsDto } from '../dto/credentials.dto';
import { Observable } from 'rxjs';
import { LoginResponseDto } from '../dto/login-response.dto';

const AUTH_API = 'https://immense-citadel-91115.herokuapp.com/api/Users/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(AUTH_API, credentials);
  }
  logout() {
    localStorage.removeItem('token');
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
