import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './landing-page/nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ToggleThemeButtonComponent } from './landing-page/toggle-theme-button/toggle-theme-button.component';
import { InfoItemComponent } from './landing-page/info-item/info-item.component';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from "@angular/common/http";
import { MainComponent } from './landing-page/main/main.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { LinkAndIconComponent } from './link-and-icon/link-and-icon.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalStepComponent } from './modal-login/modal-step/modal-step.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LandingPageComponent,
    ToggleThemeButtonComponent,
    InfoItemComponent,
    MainComponent,
    ModalLoginComponent,
    LinkAndIconComponent,
    ModalStepComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
