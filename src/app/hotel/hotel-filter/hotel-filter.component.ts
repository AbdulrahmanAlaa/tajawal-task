import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HotelService } from '../../shared/services/hotel.service';

@Component({
  selector: 'tj-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.scss']
})
export class HotelFilterComponent implements OnInit {

  private _hotelName = '';

  private _price = 0;

  public priceFilter = { max: 0, min: 0 };

  // Hotel Name PROP
  get hotelName() {
    return this._hotelName;
  }
  set hotelName(val) {
    this.hotelService.searchHotelByName(val);
    this._hotelName = val;
  }

  // Price PROP
  get price() {
    return this._price;
  }
  set price(val) {
    this.hotelService.searchHotelByPrice(val);
    this._price = val;
  }

  constructor(
    private hotelService: HotelService
  ) { }

  ngOnInit() {
    
    // Get min and max price from all hotels 
    this.hotelService.hotels.subscribe((hotels) => {
      const sortedHotels = [...hotels].sort((h1, h2) => h1.price > h2.price ? 1 : -1);
      const max = sortedHotels.pop();
      const min = sortedHotels.shift();
      this.priceFilter = { max: max && max.price, min: min && min.price };
      this.price = this.priceFilter && this.priceFilter.max || 0;
    });
  }

}
