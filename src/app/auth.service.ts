import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { CryptoService } from './crypto.service'; // Assicurati di importare CryptoService
import { Router } from '@angular/router'; // Importa Router

interface Admin {
  id: number;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Assicurati che questo sia corretto

  constructor(private http: HttpClient, private cryptoService: CryptoService, private router: Router) {}

  getUser(): Observable<any[]> {
    return this.http.get<User[]>(this.apiUrl + '/admins');
  }

  authenticatorResponse(username: string, password: string): Observable<any> {
    return this.getUser().pipe(
      map((users: User[]) => users.find(user => user.username === username && user.password === password))
    );
  }

  saveUserId(userId: number): void {
    const encryptedId = this.cryptoService.encrypt(userId.toString());
    sessionStorage.setItem('userId', encryptedId);
  }

  getUserId(): string | null {
    const encryptedId = sessionStorage.getItem('userId');
    return encryptedId ? this.cryptoService.decrypt(encryptedId) : null;
  }

  login(username: string, password: string): void {
    this.authenticatorResponse(username, password).subscribe(user => {
      if (user) {
        this.saveUserId(user.id); // Salva l'ID utente cifrato
        this.router.navigate(['/list-client']); // Reindirizza alla pagina ListClient
      } else {
        console.error('Login failed: Invalid credentials.');
      }
    }, error => {
      console.error('Login error:', error);
    });
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/utenti`, user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/utenti/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/utenti/${id}`);
  }

  getUsersByAdmin(id: number): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/utenti?user_id=${id}`);
  }

  getLoggedUser(): Observable<Admin> {
    return this.http.get<Admin>(`${this.apiUrl}/admins`);
  }
}
