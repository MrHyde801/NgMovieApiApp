import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

//material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

//components
import { LoginComponent } from './components/login/login.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { DetailsControllerComponent } from './components/details-controller/details-controller.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchBarComponent,
    SideNavComponent,
    MovieDetailsComponent,
    DetailsControllerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
