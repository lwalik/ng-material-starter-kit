import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AgePredictionService } from '../../services/age-prediction.service';
import { AgePredictionModel } from '../../models/age-prediction.model';

@Component({
  selector: 'app-age-prediction-card',
  templateUrl: './age-prediction-card.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgePredictionCardComponent {
  readonly agePrediction$: Observable<AgePredictionModel> =
    this._activatedRoute.params.pipe(
      switchMap((data) => this._agePredictionService.getOne(data['name']))
    );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _agePredictionService: AgePredictionService
  ) {}
}
