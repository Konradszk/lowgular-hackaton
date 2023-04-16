import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  declarations: [],
  providers: [],
  exports: [],
})
export class FormComponentModule {}
