import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioPageLayoutComponent } from './portfolio-page-layout/portfolio-page-layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ PortfolioPageLayoutComponent ],
    exports: [ PortfolioPageLayoutComponent ],
    entryComponents: [ PortfolioPageLayoutComponent ],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class PortfolioPageModule { }
