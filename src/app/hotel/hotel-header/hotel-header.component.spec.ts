import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelHeaderComponent } from './hotel-header.component';
import { HotelService } from '../../shared/services/hotel.service';
import { HotelServiceMocking } from '../../shared/mocks/services/hotel-mock.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../app.module';

describe('HotelHeaderComponent', () => {
  let component: HotelHeaderComponent;
  let fixture: ComponentFixture<HotelHeaderComponent>;

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
      providers: [
        {
          provide: HotelService,
          useClass: HotelServiceMocking
        }
      ],
      declarations: [ HotelHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
