import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { HomeeComponent } from './homee/homee.component';
import { EditedcontactComponent } from './editedcontact/editedcontact.component';
import { LoginComponent } from './login/login.component';
import { AccessRoutingModule } from './access/access-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    AddcontactComponent,
    HomeeComponent,
    EditedcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    AccessRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
