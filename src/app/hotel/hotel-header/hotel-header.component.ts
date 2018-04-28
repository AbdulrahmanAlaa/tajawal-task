import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../shared/services/hotel.service';

@Component({
  selector: 'tj-hotel-header',
  templateUrl: './hotel-header.component.html'
})
export class HotelHeaderComponent implements OnInit {
  /** holds the count for nights between from and to  */
  public totalNights = 0;
  
  constructor(private hotelService: HotelService) { }
  
  ngOnInit(): void {
    this.hotelService.totalNights.subscribe(
      (totalNights) => {
        this.totalNights = totalNights;
      }
    );
  }

  /** Sort Hotels list by price, name */
  sortBy(prop: 'name' | 'price') {
    this.hotelService.sortHotels(prop);
  }
}
