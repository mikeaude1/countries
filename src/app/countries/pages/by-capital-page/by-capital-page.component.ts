import { Country } from './../../interfaces/country';
import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service.ts.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit{


  public countries:Country[] = [];
  public isLoading:boolean = false;
  public inicialValue:string = '';

  constructor(private countriesServices:CountriesService){}
ngOnInit(): void {
  this.countries = this.countriesServices.cacheStorage.byCapital.countries
  this.inicialValue = this.countriesServices.cacheStorage.byCapital.term

}
seachByCapital(term:string):void{
  this.isLoading=true;
  this.countriesServices.searchCapital(term)
  .subscribe(countries=>{
    this.countries=countries;
    this.isLoading=false;

    })
}
}
