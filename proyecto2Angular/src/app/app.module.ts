import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {  MatSidenavModule } from '@angular/material/sidenav';
import {  MatListModule } from '@angular/material/list';
import {  MatCardModule } from '@angular/material/card';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material/input';
import {  MatTableModule} from '@angular/material/table';
import {  MatTooltipModule} from '@angular/material/tooltip';
import {  MatDatepickerModule } from '@angular/material/datepicker';
import {  MatRadioModule } from '@angular/material/radio';
import {  MatCheckboxModule } from '@angular/material/checkbox';

import { MatButtonModule} from '@angular/material/button';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { ReunionesComponent } from './components/reuniones/reuniones.component';
import { UsuariosService } from './services/usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { MatNativeDateModule } from '@angular/material/core';
import { EditGroupComponent } from './edit-group/edit-group.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
    HomeComponent,
    ReunionesComponent,
    CreateAccountComponent,
    CreateGroupComponent,
    EditGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    MatCheckboxModule

  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
