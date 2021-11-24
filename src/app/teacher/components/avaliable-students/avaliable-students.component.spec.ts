import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliableStudentsComponent } from './avaliable-students.component';

describe('AvaliableStudentsComponent', () => {
  let component: AvaliableStudentsComponent;
  let fixture: ComponentFixture<AvaliableStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliableStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliableStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
