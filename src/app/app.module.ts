import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostComponent } from './homepage/post/post.component';
import { PromoBlockComponent } from './homepage/promo-block/promo-block.component';
import { VideoBlockComponent } from './homepage/video-block/video-block.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SubmitComponent } from './submit/submit.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TaglineComponent } from './tagline/tagline.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetTheTeamComponent,
    FaqsComponent,
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    MenuComponent,
    PostComponent,
    PromoBlockComponent,
    SubmitComponent,
    TimelineComponent,
    VideoBlockComponent,
    TaglineComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'hackathon' }),
    HttpClientModule,
    InlineSVGModule.forRoot({ baseUrl: environment.assetsUrl }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
