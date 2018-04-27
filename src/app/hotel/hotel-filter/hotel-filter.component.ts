import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'tj-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.scss']
})
export class HotelFilterComponent implements OnInit {
  public formSearch: FormGroup;
  constructor(
    private _fb : FormBuilder
  ) { }

  ngOnInit() {
    this._fb.group({
      search:['',Validators.required]
    });
  }

  submit($event){
    console.log('clicked',$event);
    $event.preventDeafult();
    if (this.formSearch.valid) {
      
    }
  }

}
