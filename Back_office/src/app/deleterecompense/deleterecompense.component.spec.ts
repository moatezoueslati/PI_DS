import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleterecompenseComponent } from './deleterecompense.component';

describe('DeleterecompenseComponent', () => {
  let component: DeleterecompenseComponent;
  let fixture: ComponentFixture<DeleterecompenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleterecompenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleterecompenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
