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
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    IntegrationGroupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    LayoutModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AngularMultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
