import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';


/*
  Generated class for the RemoteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteProvider {

  constructor(private http: Http) {}

  GetWeatherData():Observable<any>{
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=8883565d0d3225d6cc606b859f096b6a")
    .map(obs => obs.json());
  }    
  

}
