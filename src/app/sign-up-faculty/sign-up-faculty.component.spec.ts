import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFacultyComponent } from './sign-up-faculty.component';

describe('SignUpFacultyComponent', () => {
  let component: SignUpFacultyComponent;
  let fixture: ComponentFixture<SignUpFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpFacultyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
