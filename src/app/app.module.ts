import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EventComponent } from './event/event.component';
import { ListComponent } from './list/list.component';
import { PreviousComponent } from './previous/previous.component';
import { EventlistService } from './eventlist.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    EventComponent,
    ListComponent,
    PreviousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
