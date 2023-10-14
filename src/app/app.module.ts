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
import { MainPageComponent } from './components/main-page-component/main-page.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { PostComponent } from './components/post/post.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { NavbarButtonComponent } from './components/navbar-button/navbar-button.component';
import { CreateMenuComponent } from './components/create-menu/create-menu.component';
import { PostMenuComponent } from './components/post-menu/post-menu.component';
import { LoadingModalComponent } from './components/loading-modal/loading-modal.component';
import { DesktopSidebarComponent } from './desktop-sidebar/desktop-sidebar.component';
import { FiltersHeaderComponent } from './filters-header/filters-header.component';
import { SidebarButtonComponent } from './sidebar-button/sidebar-button.component';
import { DesktopUploadModalComponent } from './desktop-upload-modal/desktop-upload-modal.component';
import { RulesButtonComponent } from './rules-button/rules-button.component';
import { RuleNumberComponent } from './rule-number/rule-number.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ExplorePageComponent } from './components/explore-page/explore-page.component';
import { ExplorePostComponent } from './components/explore-post/explore-post.component';
import { DetectFocusDirective } from './directives/detect-focus.directive';
import { SpecificSearchComponent } from './components/specific-search/specific-search.component';
import { SearchedUserCardComponent } from './components/searched-user-card/searched-user-card.component';
import { SearchedCommunityCardComponent } from './components/searched-community-card/searched-community-card.component';
import { SearchedEventCardComponent } from './components/searched-event-card/searched-event-card.component';

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
    CreateMenuComponent,
    PostMenuComponent,
    LoadingModalComponent,
    DesktopSidebarComponent,
    FiltersHeaderComponent,
    SidebarButtonComponent,
    DesktopUploadModalComponent,
    RulesButtonComponent,
    RuleNumberComponent,
    UserProfileComponent,
    ExplorePageComponent,
    ExplorePostComponent,
    DetectFocusDirective,
    SpecificSearchComponent,
    SearchedUserCardComponent,
    SearchedCommunityCardComponent,
    SearchedEventCardComponent,
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
