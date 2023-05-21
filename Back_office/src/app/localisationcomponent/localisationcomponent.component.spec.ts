import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalisationcomponentComponent } from './localisationcomponent.component';

describe('LocalisationcomponentComponent', () => {
  let component: LocalisationcomponentComponent;
  let fixture: ComponentFixture<LocalisationcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalisationcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalisationcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
