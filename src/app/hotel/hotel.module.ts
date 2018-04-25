import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelRoutingModule } from './hotel-routing.module';
import { HotelComponent } from './hotel.component';

@NgModule({
  imports: [
    CommonModule,
    HotelRoutingModule
  ],
  declarations: [
    HotelComponent
  ]
})
export class HotelModule { }
