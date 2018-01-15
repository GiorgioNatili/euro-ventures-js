import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSlideComponent } from './page-slide/page-slide.component';
import { CallToActionComponent } from './page-slide/call-to-action/call-to-action.component';
import { AddressBoxComponent } from './page-slide/address-box/address-box.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { VerticalSliderComponent } from './vertical-slider/vertical-slider.component';
import { StartupTileComponent } from './components/startup-tile/startup-tile.component';
import { PartnerTileComponent } from './components/partner-tile/partner-tile.component';
import { TeamMemberTileComponent } from './components/team-member-tile/team-member-tile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageSlideComponent, CallToActionComponent, AddressBoxComponent, SideBarComponent, VerticalSliderComponent, StartupTileComponent, PartnerTileComponent, TeamMemberTileComponent]
})
export class HomePageModule { }
