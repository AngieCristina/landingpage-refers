import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import {WelcomeComponent} from "./welcome/welcome.component";
import {CounterComponent} from "./counter/counter.component";
import {MyReferralsComponent} from "./my-referrals/my-referrals.component";
import {MyReferralsFormComponent} from "./my-referrals-form/my-referrals-form.component";


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'my-referrals', component: MyReferralsComponent },
  { path: 'my-referrals-form', component: MyReferralsFormComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})

export class AppRoutingModule {
}
