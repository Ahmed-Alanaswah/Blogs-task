import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,

  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  imports: [FormsModule, CommonModule],
})
export class PostDetailComponent implements OnInit {
  @Input() post: any; //
  newComment = { content: '' };

  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  addComment(): void {
    this.postService
      .addComment(this.post.id, this.newComment)
      .subscribe((comment) => {
        this.post.comments.push(comment);
        this.newComment = { content: '' };
      });
  }
}
