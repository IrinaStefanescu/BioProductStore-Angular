import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'category-details/:id', component: CategoryDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms', component: TermsConditionsComponent },
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
