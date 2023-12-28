import {Component} from "@angular/core";
import * as citiesData from "../../../assets/cities.json";
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  isActiveSearchBar:Boolean = true
  protected readonly console = console;
  cities:Array<any>  = (citiesData as any).default;

  constructor() {
  }


  handleSearch() {
  }
}
