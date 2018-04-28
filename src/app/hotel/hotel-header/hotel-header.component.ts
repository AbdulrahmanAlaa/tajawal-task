import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../shared/services/hotel.service';

@Component({
  selector: 'tj-hotel-header',
  templateUrl: './hotel-header.component.html'
})
export class HotelHeaderComponent {

  constructor(private hotelService: HotelService) { }
 
  /** Sort Hotels list by price, name */
  sortBy(prop: 'name' | 'price') {
    this.hotelService.sortHotels(prop);
  }
}
