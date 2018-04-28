import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelComponent } from './hotel.component';
import { HotelFilterComponent } from './hotel-filter/hotel-filter.component';
import { HotelHeaderComponent } from './hotel-header/hotel-header.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { FormsModule } from '@angular/forms';
import { FilterhotelPipe } from '../shared/pipes/filterhotel.pipe';
import { HotelItemComponent } from './hotel-item/hotel-item.component';
import { NoContentComponent } from './no-content/no-content.component';
import { HotelServiceMocking } from '../shared/mocks/services/hotel-mock.service';
import { HotelService } from '../shared/services/hotel.service';

describe('HotelComponent', () => {
  let component: HotelComponent;
  let fixture: ComponentFixture<HotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      providers: [
        {
          provide: HotelService,
          useClass: HotelServiceMocking
        }
      ],
      declarations: [
        HotelComponent, HotelFilterComponent,
        HotelHeaderComponent,
        HotelListComponent,
        FilterhotelPipe,
        HotelItemComponent,
        NoContentComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
