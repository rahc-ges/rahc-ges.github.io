import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { IntegrationGroupComponent } from './integration-group/integration-group.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

=======
import { LoginComponent } from './login/login.component';
>>>>>>> a401c907648eb1c71fe09bbaf1f9591e3c56aa06


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
<<<<<<< HEAD
    MainComponent,
    IntegrationGroupComponent,
    LoginComponent,
=======
    LoginComponent
>>>>>>> a401c907648eb1c71fe09bbaf1f9591e3c56aa06
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    LayoutModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
