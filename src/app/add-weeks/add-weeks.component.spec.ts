import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWeeksComponent } from './add-weeks.component';

describe('AddWeeksComponent', () => {
  let component: AddWeeksComponent;
  let fixture: ComponentFixture<AddWeeksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWeeksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWeeksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
