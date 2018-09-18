import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmitComponent {
}
