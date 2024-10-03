import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (typeof window !== 'undefined' && sessionStorage.getItem('userId')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
