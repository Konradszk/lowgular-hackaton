import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  styleUrls: ['./register-form.component.scss'],
  templateUrl: './register-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {

  readonly currentYear: number = new Date().getFullYear();

  readonly registerForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    birth: new FormControl('', [Validators.required]),
    personalId: new FormControl('', [Validators.required])
  });

  onRegisterFormSubmitted(registerForm: FormGroup): void {
  }

}
