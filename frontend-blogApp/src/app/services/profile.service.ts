import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = 'http://localhost:3000/api/profile'; // Adjust based on your backend URL

  constructor(private http: HttpClient) {}

  getPostsProfile(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
