import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
})
export class LoginComponent {
  credentialsForm!: FormGroup; // Non-null assertion operator

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit() {
    this.credentialsForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  login() {
    this.authService.login(this.credentialsForm.value).subscribe(
      (response) => {
        console.log('Login successful', response);
        localStorage.setItem('token', response || response.token);
        this.router.navigate(['/posts']); // Redirect to a protected route
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }

  get email() {
    return this.credentialsForm.get('email');
  }

  get password() {
    return this.credentialsForm.get('password');
  }
}
