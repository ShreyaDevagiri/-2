import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { PreviousComponent } from './previous/previous.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:"events",component:EventComponent
  },
  {
    path:"list",component:ListComponent
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path:"previous", component:PreviousComponent
  },
  {
    path:"registration", component:RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
