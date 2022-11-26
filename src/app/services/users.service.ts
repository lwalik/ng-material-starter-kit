import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginModel } from '../models/login.model';
import { UserModel } from '../models/user.model';

@Injectable()
export class UsersService {
  constructor(private _httpClient: HttpClient) {}

  login(login: LoginModel): Observable<void> {
    return this._httpClient
      .post<LoginModel>('https://fakestoreapi.com/auth/login', login)
      .pipe(map(() => void 0));
  }

  create(user: UserModel): Observable<void> {
    return this._httpClient
      .post<UserModel>('https://fakestoreapi.com/users', user)
      .pipe(map(() => void 0));
  }

  getOne(id: string): Observable<UserModel> {
    return this._httpClient.get<UserModel>(
      `https://fakestoreapi.com/users/${id}`
    );
  }
}
