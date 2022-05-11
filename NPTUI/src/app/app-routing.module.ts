import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from 'src/app/menu/menu.component';
import { LoginComponent } from 'src/app/login/login.component'
import { HomeComponent } from 'src/app/home/home.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
