import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from '../post-detail/post-detail.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  imports: [FormsModule, CommonModule, PostDetailComponent],
  standalone: true,
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  newPost = { title: '', content: '' };

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  addPost(): void {
    this.postService.addPost(this.newPost).subscribe((post) => {
      this.posts.push(post);
      this.newPost = { title: '', content: '' };
    });
  }

  goToProfile(): void {
    this.router.navigate(['/profile']); // Redirect to a protected route
  }
}
