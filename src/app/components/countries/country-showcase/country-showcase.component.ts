import { Component } from '@angular/core';
import {CountryPublisherService} from "../../../services/country-publisher.service";
import {Country} from "../../../domain/country";

@Component({
  selector: 'app-country-showcase',
  templateUrl: './country-showcase.component.html',
  styleUrls: ['./country-showcase.component.scss']
})
export class CountryShowcaseComponent {
  country?: Country

  constructor(private countryPublisherService: CountryPublisherService) {
    this.countryPublisherService.listenForCountry().subscribe((country) => {
      this.country = country;
    })
  }
}
