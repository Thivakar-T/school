import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { ListComponent } from './list/list.component';
import { StudentsComponent } from './students/students.component';


import { TableComponent } from './table/table.component';
import { SchoolComponent } from './school/school.component';


const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"school",component:SchoolComponent},
  {path:"school/:data",component:SchoolComponent},
  {path:"table",component:TableComponent},
  {path:"table/:data",component:TableComponent},
  {path:"Student",component:StudentComponent},
  {path:"Studentlist",component:StudentlistComponent},
  {path:"list",component:ListComponent},
  {path:"list/:data",component:ListComponent},
  {path:"students",component:StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
