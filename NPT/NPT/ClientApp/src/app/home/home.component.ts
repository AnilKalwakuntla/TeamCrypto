import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public loggedinUsername: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loggedinUsername = "Karthick R"
  }

  logout() {
    if (confirm("Are you sure to logout ?"))
      this.router.navigate(['/'])
  }
}
