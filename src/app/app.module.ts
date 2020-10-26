import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/access/login/login.component';
import { RegisterComponent } from './components/access/register/register.component';
import { AngularFireModule } from "@angular/fire";
import { environment } from 'src/environments/environment.prod';
import { AuthService } from "../app/services/auth/auth.service";
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home/home.component';
import { HeaderComponent } from './components/extra/header/header.component';
import { TurnsListComponent } from './components/extra/lists/turns-list/turns-list.component';
import { DoctorsListComponent } from './components/extra/lists/doctors-list/doctors-list.component';
import { PacientListComponent } from './components/extra/lists/pacient-list/pacient-list.component';
import { TurnsComponent } from './components/turns/turns.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    TurnsListComponent,
    DoctorsListComponent,
    PacientListComponent,
    TurnsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
