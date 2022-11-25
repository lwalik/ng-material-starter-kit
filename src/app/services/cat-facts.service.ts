import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatFactsModel } from '../models/cat-facts.model';

@Injectable()
export class CatFactsService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(): Observable<CatFactsModel> {
    return this._httpClient.get<CatFactsModel>('https://catfact.ninja/fact');
  }
}
