import { Component} from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service.ts.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public tag?:string

  constructor(private countriesServices:CountriesService
    ){}
  public countries:Country[]=[]

  searchByCountry(term:string):void{
    this.countriesServices.searchCountry(term).subscribe(countries=>{ this.countries=countries;})
  }
}
