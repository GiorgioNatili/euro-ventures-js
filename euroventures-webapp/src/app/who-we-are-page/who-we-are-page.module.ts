import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhoWeArePageLayoutComponent } from './who-we-are-page-layout/who-we-are-page-layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WhoWeArePageLayoutComponent],
  exports: [ WhoWeArePageLayoutComponent ],
  entryComponents: [WhoWeArePageLayoutComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class WhoWeArePageModule { }
