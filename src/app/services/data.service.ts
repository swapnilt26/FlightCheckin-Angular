import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService 
{

  url:string = "http://localhost:8080/flightreservation/reservation/";

  constructor(private _http:HttpClient) { }

  /**
   * getReservation
id:number :any  */
  public getReservation(id:number):any 
  {
      return this._http.get(this.url+id)
      
  }

  /**
   * checkin
checkinrequest   */
  public checkin(checkinrequest):any 
  {
      return this._http.post(this.url, checkinrequest)
      
  }
}

