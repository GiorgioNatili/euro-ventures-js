import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerPageLayoutComponent } from './partner-page-layout/partner-page-layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PartnerPageLayoutComponent],
  exports: [ PartnerPageLayoutComponent ],
  entryComponents: [ PartnerPageLayoutComponent ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class PartnersPageModule { }
