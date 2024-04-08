import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service.ts.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {

  public countries:Country[]=[]
  public inicialValue:string='';

  constructor(private countriesServices:CountriesService
    ){}
  ngOnInit(): void {

      this.countries= this.countriesServices.cacheStorage.byCountries.countries;
      this.inicialValue= this.countriesServices.cacheStorage.byCountries.term;
    }

  searchByCountry(term:string):void{
    this.countriesServices.searchCountry(term)
    .subscribe(countries=>{
       this.countries=countries;
      });
  }
}
