import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManinMenuComponent } from './manin-menu.component';

describe('ManinMenuComponent', () => {
  let component: ManinMenuComponent;
  let fixture: ComponentFixture<ManinMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManinMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManinMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
