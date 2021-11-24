import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksTeacherComponent } from './tasks-teacher.component';

describe('TasksTeacherComponent', () => {
  let component: TasksTeacherComponent;
  let fixture: ComponentFixture<TasksTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
