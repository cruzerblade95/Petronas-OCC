import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SiteCodeComponent } from './site-code/site-code.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'site-code', component: SiteCodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
