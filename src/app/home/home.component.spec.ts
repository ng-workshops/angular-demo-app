import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { HostElementService } from '../shared/modal/host/host-element.service';
import { ModalService } from '../shared/modal/modal.service';
import { HomeComponent } from './home.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { InfoItemComponent } from './info-item/info-item.component';
import { MessageService } from './message.service';

describe('AppComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MatCardModule],
      declarations: [HomeComponent, InfoBoxComponent, InfoItemComponent],
      providers: [MessageService, HostElementService, ModalService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('GIVEN the app is started', () => {
    it('THEN the APP component should be defined', () => {
      expect(component).toBeDefined();
    });
  });
});
