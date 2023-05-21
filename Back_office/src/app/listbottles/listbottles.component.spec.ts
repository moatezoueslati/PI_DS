import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbottlesComponent } from './listbottles.component';

describe('ListbottlesComponent', () => {
  let component: ListbottlesComponent;
  let fixture: ComponentFixture<ListbottlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListbottlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbottlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
