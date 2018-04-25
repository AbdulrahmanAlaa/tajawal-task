import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HotelComponent } from './hotel.component';


const routes: Routes = [
    {
        path: '',
        component: HotelComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HotelRoutingModule { }
