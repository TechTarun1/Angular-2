import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CountriesServiceService } from 'src/app/services/countries-service.service';

@Component({
  selector: 'app-countries-ex',
  templateUrl: './countries-ex.component.html',
  styleUrls: ['./countries-ex.component.css']
})
export class CountriesExComponent implements OnInit {

  countriesData: any[];
  originalData: any[];
  searchQuery: string = '';
  isLoading: boolean = false;

  constructor(private api: CountriesServiceService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getCountries();
  }

  getCountries = () => {
    this.api.getAllCountries().subscribe((response: any) => {
      setTimeout(() => {
        this.isLoading = false;
        this.countriesData = response.slice(20, 32);
        this.originalData = response.slice(20, 32);
      }, 3000)
    })
  }

  onInputChange(event: any) {
    console.log(this.searchQuery)
    this.filterValue();
  }

  onSearch() {
    this.filterValue();
  }

  filterValue = () => {
    if (this.searchQuery.length > 0) {
      this.countriesData = this.originalData.filter((e) => {
        return e.name.common.toLowerCase().includes(this.searchQuery.toLowerCase())
      });
    } else {
      this.countriesData = this.originalData;
    }
  }

  sortAsc() {
    this.countriesData.sort((a, b) => {
      return a.population - b.population;
    });
  }
  sortDesc() {
    this.countriesData.sort((a, b) => {
      return b.population - a.population;
    });
  }

  gotoCountryData = (data: any) => {
    console.log('fhwef', data.subregion)
    const queryParams = { subregion: data.subregion, name: data.name.common };
    this.router.navigate(['/country-data'], { queryParams: queryParams });
  }
}

