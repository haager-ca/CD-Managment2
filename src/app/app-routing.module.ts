import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListCDsComponent } from './components/list-cds/list-cds.component';

const routes: Routes = [
  {
    path: "listCDs",
    component: ListCDsComponent,
  },
  {
    path: "home",
    component: HomeComponent,
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
