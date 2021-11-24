import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksStudentComponent } from './tasks-student.component';

describe('TasksStudentComponent', () => {
  let component: TasksStudentComponent;
  let fixture: ComponentFixture<TasksStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
