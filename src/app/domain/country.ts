import {CountryName} from "./country-name";

export interface Country {
  name: CountryName,
  region: string,
  capital: string,
  population: number
}
