import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import * as commonInt from './app.interface';
import { NgProgressService } from 'ngx-progressbar';

@Injectable()
export class SharedService {

    private _fetchAllocationDetails = environment.fetchAllocationDetails;

    constructor(private _http: Http, private _proService: NgProgressService) { }

    /**
     * This method deos the service call for fetching the Accrual Search Results.
     * @param
     */
    public fetchAllocationDetails(): Observable<commonInt.Res> {
        this._proService.start();
        return this._http.get(this._fetchAllocationDetails)
            .map((response: Response) => <commonInt.Res>response.json())
            .do(response => this._proService.done())
            .catch(this.handleError);
    }

    /**
     * In a real world app, we may send the server to some remote logging infrastructure
     * instead of just logging it to the console
     * @param error
     */
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}