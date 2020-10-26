import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/access/login/login.component';
import { RegisterComponent } from './components/access/register/register.component';
import { TurnsComponent } from './components/turns/turns.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DoctorsListComponent } from './components/extra/lists/doctors-list/doctors-list.component';
import { TurnsListComponent } from './components/extra/lists/turns-list/turns-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
    
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'turns',
    component: TurnsComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path:'turnsList',
    component: TurnsListComponent
  },
  {
    path:'doctorList',
    component: DoctorsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
