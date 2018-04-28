import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelListComponent } from './hotel-list.component';
import { FilterhotelPipe } from '../../shared/pipes/filterhotel.pipe';
import { HotelItemComponent } from '../hotel-item/hotel-item.component';
import { NoContentComponent } from '../no-content/no-content.component';
import { HotelService } from '../../shared/services/hotel.service';
import { HotelServiceMocking } from '../../shared/mocks/services/hotel-mock.service';

describe('HotelListComponent', () => {
  let component: HotelListComponent;
  let fixture: ComponentFixture<HotelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HotelService,
          useClass: HotelServiceMocking
        }
      ],
      declarations: [ HotelListComponent, FilterhotelPipe,HotelItemComponent,NoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
