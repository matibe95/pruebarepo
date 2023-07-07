import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { MainPageComponent } from './components/main-page-component/main-page-component.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { autenticacionGuard } from './guards/autenticacion.guard';

const routes: Routes = [
  { path:'welcome',
    component: LandingPageComponent, 
    children: [
      {
        path: 'login', // child route path
        component: LoginModalComponent, // child route component that the router renders
      },
      {
        path: 'register', // child route path
        component: RegisterModalComponent, // child route component that the router renders
      },
    ],
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent, canActivate: [autenticacionGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
