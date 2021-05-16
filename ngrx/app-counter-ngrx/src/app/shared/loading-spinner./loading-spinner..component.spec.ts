import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSpinner.Component } from './loading-spinner..component';

describe('LoadingSpinner.Component', () => {
  let component: LoadingSpinner.Component;
  let fixture: ComponentFixture<LoadingSpinner.Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingSpinner.Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSpinner.Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
