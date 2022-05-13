import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'app';

    constructor(private msalService: MsalService) {

        
    }

    isLoggedIn(): boolean {

        return this.msalService.instance.getActiveAccount() != null
    }

    login() {

        this.msalService.loginPopup().subscribe((Response: AuthenticationResult) => {
            this.msalService.instance.setActiveAccount(Response.account)
            console.log(Response.account.username);
            sessionStorage.setItem('loggedUser', Response.account.username);
        });
    }

    logout() {

        this.msalService.logout();
    }
}




