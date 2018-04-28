import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelFilterComponent } from './hotel-filter.component';
import { FormsModule } from '@angular/forms';
import { FilterhotelPipe } from '../../shared/pipes/filterhotel.pipe';
import { HotelService } from '../../shared/services/hotel.service';
import { HotelServiceMocking } from '../../shared/mocks/services/hotel-mock.service';


describe('HotelFilterComponent', () => {
  let component: HotelFilterComponent;
  let fixture: ComponentFixture<HotelFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      providers: [
        {
          provide: HotelService,
          useClass: HotelServiceMocking
        }
      ],
      declarations: [HotelFilterComponent, FilterhotelPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
