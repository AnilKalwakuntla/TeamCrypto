import { Component, OnInit } from '@angular/core';
import { Searchservice } from 'src/app/services/search.servics';
import { searchRequestModel, searchResponseModel } from 'src/app/models/searchmodel'
import { GlobalFunctions } from '../Global';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public issearchInfoHidden: boolean = false;
  public showSearchresult: boolean = false;
  constructor(private searchservice: Searchservice) { }
  searchrequest: searchRequestModel;
  searchresponse: searchResponseModel;

  ngOnInit(): void {
    this.initvariables();
  }

  search() {
    if (!GlobalFunctions.IsNullorEmpty(this.searchrequest.searchtxt)) {
      this.searchservice.SearchPronunciation(this.searchrequest).subscribe(res => {
        console.log(res);
        if (res != null && res != undefined) {
          this.searchresponse = res;
          this.showSearchresult = true;
        }
      });
    } else {
        alert('Please enter a Valid text to search !')
    }
  }

  initvariables() {

    this.searchrequest =
    {
      searchtxt: '',
      lanId: ''
    }

    this.searchresponse =
    {
      loggedinId: '',
      employeeId: '',
      firstname: '',
      lastname: '',
      fullname: '',
      emailAddress: '',
      phone: '',
      managername: '',
      isAdmin: false,
      iscustomPronunciationAvailable: false,
      lastUpdatedDate: null
    }
  }
}
