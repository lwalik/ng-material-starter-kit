import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { CatFactsModel } from '../../models/cat-facts.model';
import { CatFactsService } from '../../services/cat-facts.service';

@Component({
  selector: 'app-cat-facts-details',
  styleUrls: ['./cat-facts-details.component.scss'],
  templateUrl: './cat-facts-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatFactsDetailsComponent {
  readonly catFacts$: Observable<CatFactsModel> =
    this._catFactsService.getOne();

  constructor(private _catFactsService: CatFactsService) {}
}
