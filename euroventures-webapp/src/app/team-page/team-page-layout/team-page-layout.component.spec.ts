import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPageLayoutComponent } from './team-page-layout.component';

describe('TeamPageLayoutComponent', () => {
  let component: TeamPageLayoutComponent;
  let fixture: ComponentFixture<TeamPageLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPageLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
