import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from '../../components/sandbox/demo/demo.component';
import { LoginComponent } from '../../components/login/login/login.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { RegisterComponent } from '../../components/register/register.component';

const routes: Routes = [
  { path: 'demo', component: DemoComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashboardComponent }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRouterModule {}
