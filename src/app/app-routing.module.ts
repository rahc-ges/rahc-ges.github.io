import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntegrationGroupComponent } from './integration-group/integration-group.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'integrationgroup', component: IntegrationGroupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
