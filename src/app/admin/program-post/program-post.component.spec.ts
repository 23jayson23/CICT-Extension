import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramPostComponent } from './program-post.component';

describe('ProgramPostComponent', () => {
  let component: ProgramPostComponent;
  let fixture: ComponentFixture<ProgramPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
