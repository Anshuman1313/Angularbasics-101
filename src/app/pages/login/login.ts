import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth } from '../../services/auth';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(Auth);
  private router = inject(Router);

  errorMessage = '';

  // Reactive form with validation
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  onSubmit(): void {
    console.log('📝 Form submitted:', this.loginForm.value);
    console.log('Form valid:', this.loginForm.valid);
    console.log('Form errors:', this.loginForm.errors);

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const result = this.authService.login(email!, password!);

      if (result.success) {
        console.log('🎉 Redirecting to dashboard...');
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = result.message;
        console.log('⚠️ Error message set:', this.errorMessage);
      }
    } else {
      console.log('❌ Form is invalid');
      this.markFormGroupTouched(this.loginForm);
    }
  }

  // Helper to show all validation errors
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
      console.log(`Field: ${key}, Valid: ${control?.valid}, Errors:`, control?.errors);
    });
  }

  // Debugging helpers
  get emailControl() { return this.loginForm.get('email'); }
  get passwordControl() { return this.loginForm.get('password'); }
}





