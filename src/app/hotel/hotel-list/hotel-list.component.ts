import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HotelService } from '../../shared/services/hotel.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'tj-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  public hotelPrice: string;
  
  /** holds all hotels retrieved from service */
  public hotels;
  
  public hotelName:string = '';

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
