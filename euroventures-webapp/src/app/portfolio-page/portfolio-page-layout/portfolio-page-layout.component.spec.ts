import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPageLayoutComponent } from './portfolio-page-layout.component';

describe('PortfolioPageLayoutComponent', () => {
  let component: PortfolioPageLayoutComponent;
  let fixture: ComponentFixture<PortfolioPageLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioPageLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
