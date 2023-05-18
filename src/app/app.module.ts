import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CounterComponent } from './counter/counter.component';
import { MyReferralsComponent } from './my-referrals/my-referrals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyReferralsFormComponent } from './my-referrals-form/my-referrals-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    WelcomeComponent,
    CounterComponent,
    MyReferralsComponent,
    MyReferralsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
