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
