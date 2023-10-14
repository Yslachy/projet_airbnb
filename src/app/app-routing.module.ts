import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  //ici, router-outlet remplacé par HomeComponent lorsque URL = <socket>/home
  {path: 'home', component: HomeComponent}, //
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'detail/:id', component: DetailComponent} //redirection pour le détail des logements
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
