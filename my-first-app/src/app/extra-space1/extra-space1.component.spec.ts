import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraSpace1Component } from './extra-space1.component';

describe('ExtraSpace1Component', () => {
  let component: ExtraSpace1Component;
  let fixture: ComponentFixture<ExtraSpace1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraSpace1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraSpace1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
