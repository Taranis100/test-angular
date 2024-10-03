import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service'; // Importa AuthService per gestire l'autenticazione

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private authService: AuthService) {}

  // Metodo per controllare se siamo sulla pagina di login
  isLoginPage(): boolean {
    return this.router.url === '/login'; // Controlla se l'URL è '/login'
  }

  // Metodo per effettuare il logout
  logout() {
    sessionStorage.removeItem('userId'); // Rimuove l'ID utente dalla sessione
    this.router.navigate(['/login']); // Reindirizza alla pagina di login
  }

  // Aggiungi eventuali altre funzionalità qui
}
