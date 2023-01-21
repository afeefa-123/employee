import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { EditedcontactComponent } from './editedcontact/editedcontact.component';
import { HomeComponent } from './home/home.component';
import { HomeeComponent } from './homee/homee.component';

const routes: Routes = [
  {path:"homee",component:HomeeComponent},
 
  {path:"home",component: HomeComponent},
  {
    path:"addcontact",component:AddcontactComponent,
        children:[
          {
            path:"add",component:EditedcontactComponent
          },
          {
          path:"edit/:id",component:EditedcontactComponent
          }
        ]},
        {
          path:"login",loadComponent:()=>import('./login/login.component').then(opt=>opt.LoginComponent)
        }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
