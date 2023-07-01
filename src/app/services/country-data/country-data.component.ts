import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private api: CountriesServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    // Retrieve the transmitted data
    this.route.queryParams.subscribe((params: any) => {
      this.queryParamName = params;
    });
    this.api.getSubRegion(this.queryParamName.subregion).subscribe((response: any) => {
      //to get only the specific data
      let data = response.filter((e) => {
        return e.name.common === this.queryParamName.name;
      })
      this.specificRegionData = response;
      console.log(data[0])
    })
  }
}
