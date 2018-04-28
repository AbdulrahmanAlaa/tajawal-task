import { TestBed, inject } from '@angular/core/testing';

import { HotelService } from './hotel.service';
import { HttpClientModule } from '@angular/common/http';

describe('HotelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers: [HotelService]
    });
  });

  it('should be created', inject([HotelService], (service: HotelService) => {
    expect(service).toBeTruthy();
  }));
});
