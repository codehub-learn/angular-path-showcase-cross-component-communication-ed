import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Country} from "../domain/country";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) {}

  get(){
    return this.http.get<Country[]>("https://restcountries.com/v3.1/all")
  }
}
