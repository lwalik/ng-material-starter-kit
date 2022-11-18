import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';

@Injectable()
export class UsersService {
  constructor(private _httpClient: HttpClient) {}

  login(login: LoginModel): Observable<void> {
    return this._httpClient
      .post<LoginModel>('https://fakestoreapi.com/auth/login', login)
      .pipe(map(() => void 0));
  }
}
