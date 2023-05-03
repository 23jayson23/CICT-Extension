import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInFacultyComponent } from './sign-in-faculty.component';

describe('SignInFacultyComponent', () => {
  let component: SignInFacultyComponent;
  let fixture: ComponentFixture<SignInFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInFacultyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
