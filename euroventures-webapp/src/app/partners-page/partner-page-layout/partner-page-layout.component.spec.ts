import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerPageLayoutComponent } from './partner-page-layout.component';

describe('PartnerPageLayoutComponent', () => {
  let component: PartnerPageLayoutComponent;
  let fixture: ComponentFixture<PartnerPageLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerPageLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
