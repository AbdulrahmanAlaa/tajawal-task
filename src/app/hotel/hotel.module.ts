import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelRoutingModule } from './hotel-routing.module';
import { HotelComponent } from './hotel.component';
import { HotelItemComponent } from './hotel-item/hotel-item.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelFilterComponent } from './hotel-filter/hotel-filter.component';
import { HotelHeaderComponent } from './hotel-header/hotel-header.component';
import { NoContentComponent } from './no-content/no-content.component';
import { FilterhotelPipe } from '../shared/pipes/filterhotel.pipe';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HotelRoutingModule,
    FormsModule,
    TranslateModule
  ],
  declarations: [
    HotelComponent,
    HotelItemComponent,
    HotelListComponent,
    HotelFilterComponent,
    HotelHeaderComponent,
    NoContentComponent,
    FilterhotelPipe    
  ]
})
export class HotelModule { }
