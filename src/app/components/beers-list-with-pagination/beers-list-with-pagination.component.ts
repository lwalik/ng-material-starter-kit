import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import { BeerModel } from '../../models/beer.model';
import { BeersService } from '../../services/beers.service';
import {PageEvent} from "@angular/material/paginator";

interface Config {
  index: number;
  size: number;
}


@Component({
  selector: 'app-beers-list-with-pagination',
  templateUrl: './beers-list-with-pagination.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeersListWithPaginationComponent {
  public basicConfig: { length: number, pageSizeOptions: number[] } = {
    length: 100,
    pageSizeOptions: [5,10,20,30,40,50,60,70,80,90,100]
  }
  private _configSubject: BehaviorSubject<Config> = new BehaviorSubject<Config>({index: 1, size: 7 });
  public config$: Observable<Config> = this._configSubject.asObservable();
  readonly beers$: Observable<BeerModel[]> = this.config$.pipe(
    switchMap((config) => this._beersService.getAll(config.index,config.size))
  );

  constructor(private _beersService: BeersService) {
  }

  handlePageEvent(event: PageEvent) {
    this._configSubject.next({
      index: event.pageIndex + 1,
      size: event.pageSize
    })
  }
}
