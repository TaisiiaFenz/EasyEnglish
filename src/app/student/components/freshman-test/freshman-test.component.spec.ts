import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshmanTestComponent } from './freshman-test.component';

describe('FreshmanTestComponent', () => {
  let component: FreshmanTestComponent;
  let fixture: ComponentFixture<FreshmanTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshmanTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshmanTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
