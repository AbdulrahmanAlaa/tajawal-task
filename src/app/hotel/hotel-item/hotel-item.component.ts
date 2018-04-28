import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tj-hotel-item',
  templateUrl: './hotel-item.component.html'
})
export class HotelItemComponent {
  
  /** holds current holtel item */
  @Input() hotel;

}
