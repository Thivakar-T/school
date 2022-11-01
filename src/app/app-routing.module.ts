import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './page/page.component';
import { PagelistComponent } from './pagelist/pagelist.component';
import { StudentComponent } from './student/student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { ListComponent } from './list/list.component';
import { StudentsComponent } from './students/students.component';


import { TableComponent } from './table/table.component';
import { SchoolComponent } from './school/school.component';


const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"page",component:PageComponent},
  {path:"page/:data",component:PageComponent},
  {path:"pagelist",component:PagelistComponent},
  {path:"pagelist/:data",component:PagelistComponent},
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
