import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { InputFloatComponent } from './input-float.component';

describe('InputFloatComponent', () => {
  let component: InputFloatComponent;
  let fixture: ComponentFixture<InputFloatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputFloatComponent],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
