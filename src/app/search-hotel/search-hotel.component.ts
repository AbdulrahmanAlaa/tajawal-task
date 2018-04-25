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

  /** holds current form submittion state  */
  public submitted = false;

  /** holds search form  */
  public form: FormGroup;

  /** holds boolean to indicate if we have error in any date */
  public dateError: boolean = false;

  constructor(
    private _fb: FormBuilder
  ) { }


  ngOnInit() {
    //intializing the default Model-Driven form
    this.form = this._fb.group({
      from: ['', (c) => this.validateDate(c, this)],
      to: ['', (c) => this.validateDate(c, this)]
    });
  }
  /**
   * Callig api to get list of results
   */
  submit() {
    this.submitted = true;
    if(this.form.valid && !this.dateError ){
      // Query the Api with provided dates
    }
  }


  /** validation for from/to  Date */
  validateDate(c: FormControl, context) {
    if (c === undefined || c.parent === undefined) { return; };
    const from = c.parent.controls['from'].value;
    const to = c.parent.controls['to'].value;

    // Checking fromDate is not Exceeding the toDate (Happy Scenario)
    if (moment(from).diff(to) >= 0) {
      this.dateError = true;
    }
    // Having wrong dates order 
    if (moment(to).diff(from) >= 0) {
      context.dateError = false;
    }
  }

}
