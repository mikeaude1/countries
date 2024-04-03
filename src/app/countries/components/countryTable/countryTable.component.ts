
import { Component,Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './countryTable.component.html',
  styles:[`
  img{
    width:35px;
  }`]
})
export class CountryTableComponent {

@Input()
public countries: Country[] = [];

}
