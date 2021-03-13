import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraSpace2Component } from './extra-space2.component';

describe('ExtraSpace2Component', () => {
  let component: ExtraSpace2Component;
  let fixture: ComponentFixture<ExtraSpace2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraSpace2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraSpace2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
