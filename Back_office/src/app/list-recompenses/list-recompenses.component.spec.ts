import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecompensesComponent } from './list-recompenses.component';

describe('ListRecompensesComponent', () => {
  let component: ListRecompensesComponent;
  let fixture: ComponentFixture<ListRecompensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecompensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecompensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
