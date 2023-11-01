import { Injectable } from '@angular/core';
import {ReplaySubject, Subject} from "rxjs";
import {Country} from "../domain/country";

@Injectable({
  providedIn: 'root'
})
export class CountryPublisherService {
  countrySubject = new Subject<Country>();

  constructor() { }

  publishCountry(data: any){
    this.countrySubject.next(data)
  }

  listenForCountry(){
    return this.countrySubject.asObservable();
  }
}
