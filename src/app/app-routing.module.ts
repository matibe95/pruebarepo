import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { MainPageComponent } from './components/main-page-component/main-page.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { autenticacionGuard } from './guards/autenticacion.guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ExplorePageComponent } from './components/explore-page/explore-page.component';
import { ModifyProfileComponent } from './components/modify-profile/modify-profile.component';

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
  { path: 'explore', component: ExplorePageComponent, canActivate: [autenticacionGuard]},
  { path: 'user/:id', component: UserProfileComponent, canActivate: [autenticacionGuard]},
  { path: 'profile', component: ModifyProfileComponent, canActivate: [autenticacionGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
