import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { MessageService } from '../message.service';
import { InfoBoxComponent } from './info-box.component';

describe('InfoBoxComponent', () => {
  let component: InfoBoxComponent;
  let fixture: ComponentFixture<InfoBoxComponent>;
  const listenerSubject = new Subject();
  const messageServiceMock = {
    listener$: listenerSubject.asObservable()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoBoxComponent],
      providers: [
        {
          provide: MessageService,
          useValue: messageServiceMock
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
