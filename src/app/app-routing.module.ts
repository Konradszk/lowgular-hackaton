import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MarsColonistsInMemoryStorageModule} from "./storages/mars-colonists-in-memory-storage.module";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), MarsColonistsInMemoryStorageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
