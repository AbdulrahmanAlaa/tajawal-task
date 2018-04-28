import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { HotelComponent } from './hotel/hotel.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HotelService } from './shared/services/hotel.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterhotelPipe } from './shared/pipes/filterhotel.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchHotelComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    HotelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
