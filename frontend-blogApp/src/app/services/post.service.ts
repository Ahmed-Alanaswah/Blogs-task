import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:3000/api/posts'; // Adjust based on your backend URL

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addPost(post: any): Observable<any> {
    return this.http.post(this.apiUrl, post);
  }

  addComment(postId: number, comment: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${postId}/comments`, comment);
  }

  // goToProfile() {
  //   return this.http.get(`http://localhost:3000/api/profile`);
  // }
}
