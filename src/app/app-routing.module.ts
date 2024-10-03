import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Aggiorna con il tuo percorso
import { ListClientComponent } from './list-client/list-client.component'; // Aggiorna con il tuo percorso
import { RouteguardService } from './routeguard.service'; // Aggiorna con il tuo percorso

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list-client', component: ListClientComponent, canActivate: [RouteguardService] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
