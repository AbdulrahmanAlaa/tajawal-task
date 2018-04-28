import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HotelService } from '../../shared/services/hotel.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'tj-hotel-list',
  templateUrl: './hotel-list.component.html',
})
export class HotelListComponent implements OnInit {
  
  /** holds hotel name to filter all hotels  */
  public hotelName:string = '';

  /** holds hotel price filter */
  public hotelPrice: string;
  
  /** holds all hotels retrieved from service */
  public hotels;
  

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.hotelService.hotels.subscribe((data) => {
      this.hotels = data;
    });

    this.hotelService.hotelName.subscribe((name)=>{
      this.hotelName = name;
    })
    
    this.hotelService.hotelPrice.subscribe((price)=>{
      this.hotelPrice = price;
    })
  }
}
