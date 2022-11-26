import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityModel } from '../../models/activity.model';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityCardComponent {
  readonly activity$: Observable<ActivityModel> = this._activityService.getOne();

  constructor(private _activityService: ActivityService) {
  }
}
