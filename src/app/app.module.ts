import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import  { RouterModule, Routes } from '@angular/router';

//Libs
import { OwlModule } from 'ng2-owl-carousel';
import { AgmCoreModule } from 'angular2-google-maps/core'; 

import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }, // Define one page view for route
      { path: 'contact', component: ContactComponent }
    ]),
    OwlModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDvqH3jmfRob74n23AIZAvpR-kwREvtDdE'
    }),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
