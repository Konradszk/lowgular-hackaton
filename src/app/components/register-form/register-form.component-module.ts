import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form.component';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, MatDatepickerModule,  MatNativeDateModule ],
  declarations: [RegisterFormComponent],
  providers: [MatDatepickerModule],
  exports: [RegisterFormComponent]
})
export class RegisterFormComponentModule {
}
