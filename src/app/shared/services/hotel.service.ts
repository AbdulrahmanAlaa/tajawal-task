import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Hotel } from '../interfaces/hotel.interface';
@Injectable()
export class HotelService {
  /** holds all hotels from server */
  public hotels = new BehaviorSubject([]);

  public hotelName = new BehaviorSubject('');
 
  public hotelPrice = new BehaviorSubject('');

  constructor(private _http: HttpClient) { }

  /** Get All hotels from server */
  public getHotels(from?: Date, to?: Date) {
    return this._http.get(environment.baseUrl).map((data: any) => {
      this.hotels.next(data.hotels);
      return data.hotels;
    });
  }

  /** Sorting the loaded hotels by name or price */ 
  public sortHotels(prop: 'name' | 'price') {
    let hotels = [...this.hotels.getValue() as Array<Hotel>];
    hotels = hotels.sort((hotelOne: Hotel, hotelTwo: Hotel) => hotelOne[prop] > hotelTwo[prop] ? 1 : -1);
    console.log(hotels)
    this.hotels.next(hotels);
  }

  /** search hotels by name */
  searchHotelByName(name){
    this.hotelName.next(name);
  }

  /** search hotels by name */
  searchHotelByPrice(price){
    this.hotelPrice.next(price);
  }

}
