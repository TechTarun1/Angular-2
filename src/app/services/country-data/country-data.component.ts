import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CountriesServiceService } from '../countries-service.service';
import { CountryData } from 'src/app/models/countries.model';

@Component({
  selector: 'app-country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.css']
})
export class CountryDataComponent {

  queryParamName: any;
  specificRegionData: CountryData[];
  isLoading: boolean = false;

  constructor(private api: CountriesServiceService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    // Retrieve the transmitted data
    this.route.queryParams.subscribe((params: any) => {
      this.queryParamName = params;
    });
    this.isLoading = true;
    this.api.getSubRegion(this.queryParamName.subregion).subscribe((response: any) => {
      //to get only the specific data
      let data = response.filter((e) => {
        return e.name.common === this.queryParamName.name;
      })
      setTimeout(() => {
        this.isLoading = false;
        this.specificRegionData = response;
      }, 3000)
    })
  }

  goBack = () => {
    this.location.back();
  }
}
