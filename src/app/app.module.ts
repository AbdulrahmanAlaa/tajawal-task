import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { HotelComponent } from './hotel/hotel.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HotelService } from './shared/services/hotel.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FilterhotelPipe } from './shared/pipes/filterhotel.pipe';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  // added cahing prevention for each deployment in prod mode 
  return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}


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
    BsDropdownModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BsDatepickerModule.forRoot()
  ],
  providers: [
    HotelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
