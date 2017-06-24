import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedService } from '../app.service';
import { Subscription } from 'rxjs/Subscription';
import * as commonInt from '../app.interface';

@Component({
  selector: 'allocation-system',
  templateUrl: './allocation-system.component.html',
  styleUrls: ['./allocation-system.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AllocationSystemComponent implements OnInit {

  private _subscrition: Subscription[] = [];
  private _gridData: commonInt.AllocationGridInterface[] = [];
  private _rowsShown: String = '1 - 10 of';

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
    this._subscrition.push(this._sharedService.fetchAllocationDetails().subscribe(
      response => {
        if (response.statusCode === 200) {
          console.log('Response ', response);
          this._gridData = response.results;
        }
      }));
  }

 /**
 * This method computes the value to be displayed in Results shown
 */
  private onPage($event) {
    this._rowsShown = ($event.first + 1) + ' - ' + ($event.first + $event.rows) + ' of';
  }

}
