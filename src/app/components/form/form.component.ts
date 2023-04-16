import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  //   constructor(private _userService: UserService) {}

  readonly citizenForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
  });

  onFormSubmitted(citizenForm: FormGroup) {
    if (!this.citizenForm.valid) {
      return;
    }
    const firstName: string = citizenForm.get('firstName')?.value;
    const lastName: string = citizenForm.get('lastName')?.value;
    const birthDate: string = citizenForm.get('lastName')?.value;

    // this._userService
    //   .registerUser({
    //     firstName: firstName,
    //     lastName: lastName,
    //     birthDate: birthDate,
    //   })
    //   .subscribe();
  }
}
