import { Routes } from '@angular/router';

import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SubmitComponent } from './submit/submit.component';
import { TimelineComponent } from './timeline/timeline.component';

export const appRoutes: Routes = [
  {
    path: 'index.html',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  {
    path: 'timeline.html',
    component: TimelineComponent,
    pathMatch: 'full'
  },
  {
    path: 'faqs.html',
    component: FaqsComponent,
    pathMatch: 'full'
  },
  {
    path: 'meet-the-team.html',
    component: MeetTheTeamComponent,
    pathMatch: 'full'
  },
  {
    path: 'submit.html',
    component: SubmitComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'index.html'
  }
];
