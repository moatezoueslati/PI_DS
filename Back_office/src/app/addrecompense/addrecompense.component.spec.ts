import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrecompenseComponent } from './addrecompense.component';

describe('AddrecompenseComponent', () => {
  let component: AddrecompenseComponent;
  let fixture: ComponentFixture<AddrecompenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrecompenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrecompenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
