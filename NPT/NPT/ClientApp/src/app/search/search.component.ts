import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public issearchInfoHidden: boolean = false;
  public showSearchresult: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.showSearchresult = true;
  }
}
