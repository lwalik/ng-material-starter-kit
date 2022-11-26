import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-user-details-card',
  templateUrl: './user-details-card.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsCardComponent {
  readonly user$: Observable<UserModel> = this._activatedRoute.params.pipe(
    switchMap((data) => this._usersService.getOne(data['id']))
  );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _usersService: UsersService
  ) {}
}
