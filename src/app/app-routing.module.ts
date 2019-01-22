import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntegrationGroupComponent } from './integration-group/integration-group.component';
import { LoginComponent } from './login/login.component';
import { ShowAddComponent } from './components/show-add/show-add.component';
const routes: Routes = [
  {
    path: '', redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'integrationgroup', component: IntegrationGroupComponent },
  { path: 'addshow/:id', component: ShowAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
