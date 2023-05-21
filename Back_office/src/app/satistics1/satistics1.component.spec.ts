import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Satistics1Component } from './satistics1.component';

describe('Satistics1Component', () => {
  let component: Satistics1Component;
  let fixture: ComponentFixture<Satistics1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Satistics1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Satistics1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
