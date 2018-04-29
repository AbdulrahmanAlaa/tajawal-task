import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHotelComponent } from './search-hotel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HotelService } from '../shared/services/hotel.service';
import { HotelServiceMocking } from '../shared/mocks/services/hotel-mock.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';

describe('SearchHotelComponent', () => {
  let component: SearchHotelComponent;
  let fixture: ComponentFixture<SearchHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        BsDatepickerModule.forRoot(),
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
      ],
      providers: [
        {
          provide: HotelService,
          useClass: HotelServiceMocking
        }
      ],
      declarations: [SearchHotelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
