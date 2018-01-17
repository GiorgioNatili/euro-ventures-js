import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamPageLayoutComponent } from './team-page-layout/team-page-layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TeamPageLayoutComponent],
  exports: [TeamPageLayoutComponent],
  entryComponents: [ TeamPageLayoutComponent ],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class TeamPageModule { }
