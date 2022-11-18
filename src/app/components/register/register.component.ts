import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register',
  styleUrls: ['./register.component.scss'],
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  readonly newUser: FormGroup = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    city: new FormControl(),
    street: new FormControl(),
    number: new FormControl(),
    zipcode: new FormControl(),
    phone: new FormControl(),
  });

  constructor(private _usersService: UsersService) {}

  onNewUserSubmitted(newUser: FormGroup): void {
    this._usersService
      .create({
        email: newUser.value.email,
        username: newUser.value.username,
        password: newUser.value.password,
        name: {
          firstname: newUser.value.firstName,
          lastname: newUser.value.lastName,
        },
        address: {
          city: newUser.value.city,
          street: newUser.value.street,
          number: newUser.value.number,
          zipcode: newUser.value.zipcode,
        },
        phone: newUser.value.phone,
      })
      .subscribe();
  }
}
