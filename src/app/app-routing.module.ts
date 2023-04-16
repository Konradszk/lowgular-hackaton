import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MarsColonistsInMemoryStorageModule} from "./storages/mars-colonists-in-memory-storage.module";
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';

const routes: Routes = [{ path: 'register', component: RegisterFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), MarsColonistsInMemoryStorageModule, RegisterFormComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
