import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSlideComponent } from './page-slide.component';

describe('PageSlideComponent', () => {
  let component: PageSlideComponent;
  let fixture: ComponentFixture<PageSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
