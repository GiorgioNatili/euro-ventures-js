import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupTileComponent } from './startup-tile.component';

describe('StartupTileComponent', () => {
  let component: StartupTileComponent;
  let fixture: ComponentFixture<StartupTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
