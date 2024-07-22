import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:3000/api/posts'; // Adjust based on your backend URL

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders().set('x-auth-token', token || '');
    return this.http.get(this.apiUrl, { headers });
  }

  addPost(post: any): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders().set('x-auth-token', token || '');
    return this.http.post(this.apiUrl, post, { headers });
  }

  addComment(postId: number, comment: any): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders().set('x-auth-token', token || '');
    return this.http.post(`${this.apiUrl}/${postId}/comments`, comment, {
      headers,
    });
  }
}
