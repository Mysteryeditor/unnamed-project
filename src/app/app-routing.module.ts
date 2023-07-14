import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './users/signup/signup.component';
import { SigninComponent } from './users/signin/signin.component';
import { TasksComponent } from './tasks/tasks.component';
const routes: Routes = [

  { path:'register', component:SignupComponent },
  {path:'signin',component:SigninComponent},
  {path:'tasks',component:TasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
