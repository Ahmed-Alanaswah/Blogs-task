import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Adjust based on your backend URL

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/user`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/auth`, credentials);
  }

  isLoggedIn() {
    return localStorage.getItem('token');
  }
}
