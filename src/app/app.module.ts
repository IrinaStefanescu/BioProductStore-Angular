import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApiService } from './services/api.service';
import { NotifierModule } from 'angular-notifier';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryService } from './services/category.service';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TermsConditionsComponent,
    ContactComponent,
    CategoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NotifierModule
  ],
  providers: [ApiService, CategoryService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
