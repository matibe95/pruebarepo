import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/landing-page/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ToggleThemeButtonComponent } from './components/landing-page/toggle-theme-button/toggle-theme-button.component';
import { InfoItemComponent } from './components/landing-page/info-item/info-item.component';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from "@angular/common/http";
import { MainComponent } from './components/landing-page/main/main.component';
import { LinkAndIconComponent } from './components/link-and-icon/link-and-icon.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalStepComponent } from './components/modal-step/modal-step.component';
import { DemoModalComponent } from './components/demo-modal/demo-modal.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { MainPageComponent } from './components/main-page-component/main-page-component.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { PostComponent } from './components/post/post.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { NavbarButtonComponent } from './components/navbar-button/navbar-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LandingPageComponent,
    ToggleThemeButtonComponent,
    InfoItemComponent,
    MainComponent,
    LinkAndIconComponent,
    ModalStepComponent,
    DemoModalComponent,
    LoginModalComponent,
    RegisterModalComponent,
    MainPageComponent,
    MainNavbarComponent,
    HeaderComponent,
    PostComponent,
    ActionButtonComponent,
    NavbarButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
