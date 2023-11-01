import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageOneComponent} from "./components/page-one/page-one.component";
import {PageTwoComponent} from "./components/page-two/page-two.component";
import {CountriesComponent} from "./components/countries/countries.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "page-one"
  },
  {
    path: "page-one",
    component: PageOneComponent
  },
  {
    path: "page-two",
    component: PageTwoComponent
  },
  {
    path: "countries",
    component: CountriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
