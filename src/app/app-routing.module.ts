import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './page/page.component';
import { PagelistComponent } from './pagelist/pagelist.component';


const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"page",component:PageComponent},
  {path:"page/:data",component:PageComponent},
  {path:"pagelist",component:PagelistComponent},
  {path:"pagelist/:data",component:PagelistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
