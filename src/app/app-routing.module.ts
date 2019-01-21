import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntegrationGroupComponent } from './integration-group/integration-group.component';

const routes: Routes = [
  { path: 'integrationgroup', component: IntegrationGroupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
