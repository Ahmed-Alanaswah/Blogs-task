import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  imports: [FormsModule, CommonModule, PostDetailComponent],
  standalone: true,
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  newPost = { content: '' };

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe(
      (data) => {
        if (Array.isArray(data)) {
          this.posts = data;
        } else {
          console.error('Unexpected data format:', data);
        }
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  addPost(): void {
    if (this.newPost.content.trim()) {
      this.postService.addPost(this.newPost).subscribe(
        (post) => {
          this.posts.push(post);
          this.newPost = { content: '' };
        },
        (error) => {
          console.error('Error adding post:', error);
        }
      );
    } else {
      console.error('Post content cannot be empty');
    }
  }

  gotToProfile(): void {
    this.router.navigate(['/profile']); // Redirect to a protected route
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']); // Redirect to a protected route
  }
}
