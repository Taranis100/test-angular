import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';  
  password: string = '';  
  errorMessage: string = '';  
  loading: boolean = false;
  hide: boolean = true; // Variabile per mostrare/nascondere la password

  constructor(private authService: AuthService, private router: Router) {}

  // Metodo per gestire il login
  login() {
    this.loading = true; 

    this.authService.authenticatorResponse(this.username, this.password).subscribe(
      (user) => {
        this.loading = false;
        if (user) {
          sessionStorage.setItem('userId', user.id.toString()); // Salva l'ID utente
          this.router.navigate(['/list-client']); // Reindirizza alla pagina ListClient
        } else {
          this.errorMessage = 'Login failed. Please check your credentials.';
        }
      },
      (error: any) => {
        this.loading = false;
        console.error('Login error:', error);
        this.errorMessage = 'An error occurred. Please try again later.';
      }
    );
  }
}