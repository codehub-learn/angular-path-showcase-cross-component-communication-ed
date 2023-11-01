import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublisherComponent } from './components/publisher/publisher.component';
import { SubscriberComponent } from './components/subscriber/subscriber.component';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { CountriesComponent } from './components/countries/countries.component';
import {HttpClientModule} from "@angular/common/http";
import { CountryListComponent } from './components/countries/country-list/country-list.component';
import { CountryShowcaseComponent } from './components/countries/country-showcase/country-showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    PublisherComponent,
    SubscriberComponent,
    PageOneComponent,
    PageTwoComponent,
    CountriesComponent,
    CountryListComponent,
    CountryShowcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
