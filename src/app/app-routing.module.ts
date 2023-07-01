import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';

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
  {
    path: '', redirectTo: 'welcome', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
