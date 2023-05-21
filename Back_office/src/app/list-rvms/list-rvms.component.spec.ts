import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRVMSComponent } from './list-rvms.component';

describe('ListRVMSComponent', () => {
  let component: ListRVMSComponent;
  let fixture: ComponentFixture<ListRVMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRVMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRVMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
