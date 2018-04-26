import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelRoutingModule } from './hotel-routing.module';
import { HotelComponent } from './hotel.component';
import { HotelItemComponent } from './hotel-item/hotel-item.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelFilterComponent } from './hotel-filter/hotel-filter.component';
import { HotelHeaderComponent } from './hotel-header/hotel-header.component';

@NgModule({
  imports: [
    CommonModule,
    HotelRoutingModule
  ],
  declarations: [
    HotelComponent,
    HotelItemComponent,
    HotelListComponent,
    HotelFilterComponent,
    HotelHeaderComponent
  ]
})
export class HotelModule { }
