import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRVMComponent } from './update-rvm.component';

describe('UpdateRVMComponent', () => {
  let component: UpdateRVMComponent;
  let fixture: ComponentFixture<UpdateRVMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRVMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRVMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
