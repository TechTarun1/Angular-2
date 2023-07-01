import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryData } from '../models/countries.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesServiceService {

  constructor(private http: HttpClient) { }

  url: string = 'https://restcountries.com/v3.1'

  getAllCountries(): Observable<CountryData> {
    return this.http.get<CountryData>(`${this.url}/all`)
  }

  getSubRegion(subregion: string): Observable<CountryData> {
    return this.http.get<CountryData>(`${this.url}/subregion/${subregion}`)
  }
}
