import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { HotelComponent } from './hotel/hotel.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchHotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
