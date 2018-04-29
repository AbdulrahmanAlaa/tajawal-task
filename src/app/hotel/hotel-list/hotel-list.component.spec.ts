import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelListComponent } from './hotel-list.component';
import { FilterhotelPipe } from '../../shared/pipes/filterhotel.pipe';
import { HotelItemComponent } from '../hotel-item/hotel-item.component';
import { NoContentComponent } from '../no-content/no-content.component';
import { HotelService } from '../../shared/services/hotel.service';
import { HotelServiceMocking } from '../../shared/mocks/services/hotel-mock.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../app.module';

describe('HotelListComponent', () => {
  let component: HotelListComponent;
  let fixture: ComponentFixture<HotelListComponent>;

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
      declarations: [ HotelListComponent, FilterhotelPipe,HotelItemComponent,NoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
