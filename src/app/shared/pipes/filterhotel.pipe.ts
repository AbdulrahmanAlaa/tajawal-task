import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from '../interfaces/hotel.interface';

@Pipe({
  name: 'filterhotel',
  pure: false
})
export class FilterhotelPipe implements PipeTransform {

  transform(hotels: Array<Hotel>, prop?: string, value?: string): any {
    if (!prop || !value) {
      return hotels;
    }
    let result =[];
    if (prop === 'name') {
       result = hotels.filter(hotel => hotel.name.toLowerCase().indexOf(value) > -1)
    } else if (prop === 'price') {
      result = hotels.filter(hotel => hotel.price <= +value);
    }
    //Gets hotels with specific name by passing only the first argument or by any specified prop and value
    return result ;
  }

}
