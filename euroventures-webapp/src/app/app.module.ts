import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { LogoComponent } from './components/logo/logo.component';
import { ManinMenuComponent } from './manin-menu/manin-menu.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { OfficeLocationComponent } from './components/office-location/office-location.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomePageModule } from './home-page/home-page.module';
import { PortfolioPageModule } from './portfolio-page/portfolio-page.module';
import { TeamPageModule } from './team-page/team-page.module';
import { WhoWeArePageModule } from './who-we-are-page/who-we-are-page.module';
import { PartnersPageModule } from './partners-page/partners-page.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SocialLinksComponent,
    LogoComponent,
    ManinMenuComponent,
    CallToActionComponent,
    OfficeLocationComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    HomePageModule,
    PortfolioPageModule,
    TeamPageModule,
    WhoWeArePageModule,
    PartnersPageModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
