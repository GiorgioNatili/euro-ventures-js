import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberTileComponent } from './team-member-tile.component';

describe('TeamMemberTileComponent', () => {
  let component: TeamMemberTileComponent;
  let fixture: ComponentFixture<TeamMemberTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMemberTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemberTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
