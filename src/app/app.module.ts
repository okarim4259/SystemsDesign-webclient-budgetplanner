import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-modules/routing/app-router.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './app-modules/material/material.module';
import { FormsModule } from '@angular/forms';

import { DemoComponent } from './components/sandbox/demo/demo.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { LoginComponent } from './components/login/login/login.component';
import { LoginLogoComponent } from './components/login/login-logo/login-logo.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/Auth/auth.service';
import { FeatureDisplayComponent } from './components/login/features-display/feature-display/feature-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NavbarComponent,
    LoginComponent,
    LoginLogoComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent,
    RegisterComponent,
    FeatureDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
