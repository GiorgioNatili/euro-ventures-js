import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { LogoComponent } from './components/logo/logo.component';
import { ManinMenuComponent } from './manin-menu/manin-menu.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { OfficeLocationComponent } from './components/office-location/office-location.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SocialLinksComponent,
    LogoComponent,
    ManinMenuComponent,
    CallToActionComponent,
    OfficeLocationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
