import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSlideComponent } from './page-slide/page-slide.component';
import { CallToActionComponent } from './page-slide/call-to-action/call-to-action.component';
import { AddressBoxComponent } from './page-slide/address-box/address-box.component';
import { VerticalSliderComponent } from './vertical-slider/vertical-slider.component';
import { StartupTileComponent } from './components/startup-tile/startup-tile.component';
import { PartnerTileComponent } from './components/partner-tile/partner-tile.component';
import { TeamMemberTileComponent } from './components/team-member-tile/team-member-tile.component';
import { HomePageLayoutComponent } from './home-page-layout/home-page-layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations:
      [PageSlideComponent,
      CallToActionComponent,
          AddressBoxComponent,
          VerticalSliderComponent,
          StartupTileComponent,
          PartnerTileComponent,
          TeamMemberTileComponent,
          HomePageLayoutComponent],
    exports: [HomePageLayoutComponent],
    entryComponents: [HomePageLayoutComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class HomePageModule { }
