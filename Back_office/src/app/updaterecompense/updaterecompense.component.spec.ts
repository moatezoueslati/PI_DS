import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterecompenseComponent } from './updaterecompense.component';

describe('UpdaterecompenseComponent', () => {
  let component: UpdaterecompenseComponent;
  let fixture: ComponentFixture<UpdaterecompenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdaterecompenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdaterecompenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
