import { Country } from './../../interfaces/country';
import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service.ts.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {
  public tag?:string

constructor(private countriesServices:CountriesService){}
public countries:Country[]=[]

seachByCapital(term:string):void{
  this.countriesServices.searchCapital(term).subscribe(countries=>{ this.countries=countries;})
}
}
