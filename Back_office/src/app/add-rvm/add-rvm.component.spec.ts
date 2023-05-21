import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRVMComponent } from './add-rvm.component';

describe('AddRVMComponent', () => {
  let component: AddRVMComponent;
  let fixture: ComponentFixture<AddRVMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRVMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRVMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
