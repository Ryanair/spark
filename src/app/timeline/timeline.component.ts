import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent {
  public points = [
    {
      title: 'Launch',
      // tslint:disable-next-line
      description: 'Open for ideas, lunchtime sessions running across all centres for people to drop in and learn more or brainstorm an idea.',
      date: '13th<br/>AUG'
    },
    {
      title: 'Closed for ideas',
      // tslint:disable-next-line
      description: 'No more ideas can be submitted. Ideas will be reviewed to see who gets 24 hours to work on theirs.',
      date: '10th<br/>SEP',
      reverse: true
    },
    {
      title: 'Idea selection',
      // tslint:disable-next-line
      description: 'Idea owners going forward will be contacted this week and given 3 weeks to get their team together.',
      date: '17th<br/>SEP'
    },
    {}
  ];
}
