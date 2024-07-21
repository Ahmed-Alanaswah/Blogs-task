import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PostDetailComponent } from '../post-detail/post-detail.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [FormsModule],
  standalone: true,
})
export class RegisterComponent {
  user = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.user).subscribe(
      (response) => {
        console.log('User registered successfully', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        alert('Registration failed' + ' ' + error);
        console.error('Registration failed', error);
      }
    );
  }
}
