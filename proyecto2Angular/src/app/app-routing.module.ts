import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ReunionesComponent } from './components/reuniones/reuniones.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { EditGroupComponent } from './edit-group/edit-group.component';

const routes: Routes = [

  {path : ('login'), component: LoginComponent},
  {path : ('home'), component: HomeComponent},
  {path : ('reuniones'), component: ReunionesComponent},
  {path : (''), component: HomeComponent},
  {path : ('createAccount'), component: CreateAccountComponent},
  {path : ('createGroup'), component: CreateGroupComponent},
  {path : ('editarReunion/:id'), component:EditGroupComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {




 }
