import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';




const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"Student",component:StudentComponent},
  {path:"Studentlist",component:StudentlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
