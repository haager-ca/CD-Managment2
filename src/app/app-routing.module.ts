import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListCDsComponent } from './components/list-cds/list-cds.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationGuard } from './guard/authentication.guard';

const routes: Routes = [
  {
    path: "listCDs",
    component: ListCDsComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "**",
    redirectTo: "/home",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
