import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { LoginComponent } from 'src/app/login/login.component'
import { MypronunciationComponent } from './mypronunciation/mypronunciation.component';
import { SearchComponent } from './search/search.component'
import { MyteamComponent } from './myteam/myteam.component';
import {Pronunciationservice} from './services/pronunciation.service';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    MenuComponent,
    LoginComponent,
    MyteamComponent,
    MypronunciationComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent }
    ], { useHash: true, onSameUrlNavigation: 'reload' })
  ],
  providers: [Pronunciationservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
