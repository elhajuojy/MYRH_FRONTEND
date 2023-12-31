import {Component} from "@angular/core";
import * as citiesData from "../../../assets/cities.json";
import {JobOfferService} from "../../service/job-offer/job-offer.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  isActiveSearchBar:Boolean = true
  protected readonly console = console;
  cities:Array<any>  = (citiesData as any).default;

  constructor(
    private router :ActivatedRoute,
    private route:Router,

  ) {
  }


  handleSearch(target:any) {
    console.log(target.value)
    console.log(this.router.snapshot.queryParams)
    this.route.navigate(['/job_offers'],

      {queryParams:{
          ...this.router.snapshot.queryParams,
          title:target.value,
        }

      })
  }

  handleSearchByCity(event:any ) {
    console.log(event.value)
    console.log(this.router.snapshot.queryParams)
    this.route.navigate(['/job_offers'],

      {queryParams:{
          ...this.router.snapshot.queryParams,
          location:event.value,
        }

      })

  }
}
