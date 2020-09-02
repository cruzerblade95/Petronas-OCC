import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SiteCodeComponent } from './site-code/site-code.component';
import { StationContactComponent } from './station-contact/station-contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'site-code', component: SiteCodeComponent},
  {path: 'station-contact', component: StationContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
