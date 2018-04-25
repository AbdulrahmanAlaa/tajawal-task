import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { pages } from './config/pages-config';

const routes: Routes = [
  {
    path:'',
    redirectTo : 'search',
    pathMatch:'full'
  },
  {    
    path:pages.search.path,
    component:SearchHotelComponent
  },
  {
    path:pages.hotels.path,
    loadChildren: pages.hotels.loadChildren
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
