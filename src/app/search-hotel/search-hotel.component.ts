import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Component({
  selector: 'tj-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.scss']
})
export class SearchHotelComponent implements OnInit {

  public submitted = false;

  public form: FormGroup;

  public dateError: boolean = false;

  constructor(
    private _fb: FormBuilder
  ) { }


  ngOnInit() {
    this.form = this._fb.group({
      from: ['', (c)=> this.validateDate(c,this)],
      to: ['',  (c)=> this.validateDate(c,this)]
    });
  }

  submit() {
    this.submitted = true;
  }


  /** validation for start activity Date */
  validateDate(c: FormControl,context) {
    if (c === undefined || c.parent === undefined) { return; };
    const from = c.parent.controls['from'].value;
    const to = c.parent.controls['to'].value;
    if (moment(from).diff(to) >= 0) {
    this.dateError =true;
    }

    if (moment(to).diff(from) >= 0) {
      context.dateError =false;
    }
  }

}
