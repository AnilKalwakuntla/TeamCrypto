import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  showMypronunciation: boolean = false;
  showMyTeam: boolean = false;
  showSearch: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  menuclick(id: number) {
    switch (id) {
      case 1:
        this.showMyTeam = this.showSearch = false;
        this.showMypronunciation=true;
        break;
      case 2:
        this.showMypronunciation = this.showSearch = false;
        this.showMyTeam=true;
        break;
      case 3:
        this.showMypronunciation = this.showMyTeam = false;
        this.showSearch=true;
        break;
    }
  }
}
