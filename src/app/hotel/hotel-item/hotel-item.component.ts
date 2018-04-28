import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tj-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.scss']
})
export class HotelItemComponent  {
  @Input() hotel;
  
}
