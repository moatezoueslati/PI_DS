import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRVMComponent } from './delete-rvm.component';

describe('DeleteRVMComponent', () => {
  let component: DeleteRVMComponent;
  let fixture: ComponentFixture<DeleteRVMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRVMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRVMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
