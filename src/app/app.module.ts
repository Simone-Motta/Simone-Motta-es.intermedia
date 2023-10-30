import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

import { ApiService } from './services/api.service';
import { DrinkService } from './services/drink.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,   
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    DetailComponent
  ],
  providers: [
    ApiService,
    DrinkService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
