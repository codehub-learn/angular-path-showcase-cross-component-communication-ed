import { Component } from '@angular/core';
import {Country} from "../../../domain/country";
import {CountriesService} from "../../../services/countries.service";
import {CountryPublisherService} from "../../../services/country-publisher.service";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent {
  countries: Country[] = [];

  constructor(private countriesService: CountriesService, private countryPublisherService: CountryPublisherService) {
    this.countriesService.get().subscribe((countries) => {
      this.countries = countries.slice(0, 10)
    })
  }

  publishCountry(i: number) {
    this.countryPublisherService.publishCountry(this.countries[i]);
  }
}
