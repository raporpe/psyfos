import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VotoComponent } from './voto/voto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '', component: AppLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'voto', component: VotoComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
