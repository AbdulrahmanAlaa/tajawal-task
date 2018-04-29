import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelItemComponent } from './hotel-item.component';
import { Hotel } from '../../shared/interfaces/hotel.interface';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../app.module';

describe('HotelItemComponent', () => {
  let component: HotelItemComponent;
  let fixture: ComponentFixture<HotelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ 
        HttpClientModule ,
        TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })],
      declarations: [HotelItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelItemComponent);
    component = fixture.componentInstance;
    //Mocking @input hotel
    component.hotel = {
      name: "Novotel Hotel",
      price: 111,
      city: "Vienna",
      availability: [
        {
          from: "20-10-2020",
          to: "28-10-2020"
        },
        {
          from: "04-11-2020",
          to: "20-11-2020"
        },
        {
          from: "08-12-2020",
          to: "24-12-2020"
        }
      ]
    } as Hotel
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
