import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebotlleComponent } from './updatebotlle.component';

describe('UpdatebotlleComponent', () => {
  let component: UpdatebotlleComponent;
  let fixture: ComponentFixture<UpdatebotlleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatebotlleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebotlleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
