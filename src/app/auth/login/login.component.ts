import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // A signal to show an error message on the page
  public loginFailed = signal<boolean>(false);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  // A simple mock service to simulate authentication
  private readonly authorizedEmails = ['admin@stes.com', 'cms@hyperion.com'];

  // A reactive form group for the email input
  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  // The login function
  public login() {
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.get('email')?.value;

    if (this.authorizedEmails.includes(email as string)) {
      // In a real app, you would get a JWT token from your backend here.
      // For now, we'll just simulate a successful login.
      localStorage.setItem('auth_token', 'mock-jwt-token');
      this.loginFailed.set(false);
      this.router.navigate(['/admin']); // Redirect to the admin dashboard
    } else {
      this.loginFailed.set(true);
    }
  }
}