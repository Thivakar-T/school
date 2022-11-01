import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { TableComponent } from './table/table.component';
import { SchoolComponent } from './school/school.component';


const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"school",component:SchoolComponent},
  {path:"school/:data",component:SchoolComponent},

  {path:"table",component:TableComponent},
  {path:"table/:data",component:TableComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
