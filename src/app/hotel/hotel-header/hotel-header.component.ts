import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../shared/services/hotel.service';

@Component({
  selector: 'tj-hotel-header',
  templateUrl: './hotel-header.component.html',
  styleUrls: ['./hotel-header.component.scss']
})
export class HotelHeaderComponent{

  constructor(private hotelService: HotelService) { }

  sortBy(prop: 'name' | 'price') {
    this.hotelService.sortHotels(prop);
  }
}
