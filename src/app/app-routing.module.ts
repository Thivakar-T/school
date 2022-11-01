import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { StudentsComponent } from './students/students.component';


const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"list",component:ListComponent},
  {path:"list/:data",component:ListComponent},
  {path:"students",component:StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
