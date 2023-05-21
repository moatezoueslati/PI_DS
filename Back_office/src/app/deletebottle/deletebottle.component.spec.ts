import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletebottleComponent } from './deletebottle.component';

describe('DeletebottleComponent', () => {
  let component: DeletebottleComponent;
  let fixture: ComponentFixture<DeletebottleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletebottleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletebottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
