import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeArePageLayoutComponent } from './who-we-are-page-layout.component';

describe('WhoWeArePageLayoutComponent', () => {
  let component: WhoWeArePageLayoutComponent;
  let fixture: ComponentFixture<WhoWeArePageLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoWeArePageLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoWeArePageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
