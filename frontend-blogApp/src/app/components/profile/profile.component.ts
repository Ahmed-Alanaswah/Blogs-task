import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, PostDetailComponent, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  constructor(private profileService: ProfileService, private router: Router) {}
  posts: any[] = [];
  user = { email: '' };
  ngOnInit(): void {
    this.loadUserPosts();
  }

  loadUserPosts(): void {
    this.profileService.getPostsProfile().subscribe((data) => {
      this.posts = data.posts;
      this.user = data.user;
    });
  }
}
