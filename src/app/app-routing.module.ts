import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { ListComponent } from './list/list.component';
import { StudentsComponent } from './students/students.component';
import { FormComponent } from './form/form.component';
import { ManageComponent } from './manage/manage.component';


const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"Student",component:StudentComponent},
  {path:"Studentlist",component:StudentlistComponent},
  {path:"list",component:ListComponent},
  {path:"list/:data",component:ListComponent},
  {path:"students",component:StudentsComponent},
  {path:"manage",component:ManageComponent},
  {path:"form",component:FormComponent},
  {path:"form/:data",component:FormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
