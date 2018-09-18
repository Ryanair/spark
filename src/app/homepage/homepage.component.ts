import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent {
  public posts: any[] = [
    {
      image: 'assets/img/1.jpg',
      reverseImagePosition: false,
      title: 'What is Spark?',
      // tslint:disable-next-line
      description: 'Spark is a chance for you to work on an idea that you believe would be of benefit to Ryanair. The benefit could be financial, operational or even internal improvements',
      linkText: 'Got some question? Take a look at the FAQ\'s',
      linkLocation: 'faqs.html'
    },
    {
      image: 'assets/img/2.jpg',
      reverseImagePosition: true,
      title: 'Why should I get involved?',
      // tslint:disable-next-line
      description: 'Why not?! A chance for you to act like a startup just for one day and showcase your idea. As an idea owner or a team member you will have the chance to:<br/> - Learn about our business and meet new colleagues<br/> - A chance to try out a new idea or technology<br/> - Have some fun !',
      linkText: 'Submit an idea',
      linkLocation: 'submit.html'
    }
  ];
}
