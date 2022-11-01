import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { ListComponent } from './list/list.component';
import { StudentsComponent } from './students/students.component';


const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "Student", component: StudentComponent },
  { path: "Student/:data", component: StudentComponent },
  { path: "studentlist", component: StudentlistComponent },
  { path: "Studentlist/:data", component: StudentlistComponent },
  { path: "list", component: ListComponent },
  { path: "list/:data", component: ListComponent },
  { path: "students", component: StudentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
