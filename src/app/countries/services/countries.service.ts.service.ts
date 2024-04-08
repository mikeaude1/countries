import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError,  map, of, pipe, tap,  } from 'rxjs';
import { Country } from '../interfaces/country';
import { Region } from '../interfaces/region.type';
import { CacheStore } from '../interfaces/cache-storage.interface';

@Injectable({ providedIn: 'root'})
export class CountriesService {

  private apiUrl:string ='https://restcountries.com/v3.1/'

  public cacheStorage:CacheStore = {
    byCapital: { term:'',countries:[]},
    byCountries: { term:'',countries:[]},
    byRegion: { region:'',countries:[]}
  }
  constructor(private http:HttpClient) { }

  private getCountriesRequest( url:string):Observable<Country[]>{
    return this.http.get<Country[]>(url)

    .pipe(
      catchError( () => of([]))
      );
  }

  searchCountryByAlphaCode( code:string):Observable<Country|null>{
    const url =`${ this.apiUrl }/alpha/${ code }`;

    return this.http.get<Country[]>(url)
    .pipe(
      map( countries => countries.length > 0 ? countries[0]: null),
      catchError( () => of(null)),
      );
  }
  searchCapital( term:string ):Observable<Country[]> {
    const url =`${ this.apiUrl }/capital/${ term }`;
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries=>this.cacheStorage.byCapital={term, countries})
    )
  }
  searchCountry( term:string ):Observable<Country[]> {
    const url =`${ this.apiUrl }/name/${ term }`
    return this.getCountriesRequest(url);
  }
  searchRegion( term:string ):Observable<Country[]> {
    const url =`${ this.apiUrl }/region/${ term }`
    return this.getCountriesRequest(url)

  }
}
