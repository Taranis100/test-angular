import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Importa ReactiveFormsModule e FormsModule
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa BrowserAnimationsModule
import { MatInputModule } from '@angular/material/input'; // Importa Material Input
import { MatFormFieldModule } from '@angular/material/form-field'; // Importa Material FormField
import { MatButtonModule } from '@angular/material/button'; // Importa Material Button
import { MatTableModule } from '@angular/material/table'; // Importa Material Table
import { MatCardModule } from '@angular/material/card'; // Importa Material Card
import { MatIconModule } from '@angular/material/icon'; // Importa Material Icon
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Importa Material Spinner
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListClientComponent } from './list-client/list-client.component';
import { FooterComponent } from './footer/footer.component'; // Assicurati che esista

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListClientComponent,
    FooterComponent // Assicurati che sia presente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule, // Aggiungi MatCardModule qui
    MatIconModule, // Aggiungi MatIconModule qui
    MatProgressSpinnerModule, // Aggiungi MatProgressSpinnerModule qui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
