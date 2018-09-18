import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqsComponent {
  public questions = [
    'What is Ryanair Spark?',
    'How does it work?',
    'Do I need to have a team to enter?',
    'What does a good idea look like?',
    'Do I have to work for 24 hours?',
    'Is there any restriction to the technology I can use?',
    'What is the showcase like?',
    'I haven\'t done a presentation before!!!',
    'I am not based in Dublin. Can I participate?',
    'Will I get paid overtime / get time in lieu?',
    'Is there a prize?',
    'I have more questions'
  ];

  public answers = [
    /* tslint:disable */
    '<p class="title">What is Ryanair Spark?</p>Ryanair Spark is your chance to work on an idea that you believe will be a benefit to Ryanair.<br/>It could be a new product, improved back off processing or a new technology that we should be trialling.\n',
    '<p class="title">How does it work?</p>It’s easy...<br/>1. Submit your idea online before 10/09/2018<br/>2. The top 4-6 ideas will be selected to go forward to "Spark Day"<br/>3. On "Spark Day" you will have 24 hours to bring your idea to life with the support of mentors, design and development teams to create a pitch<br/>4. At the end of "Spark Day" your idea will be showcased to an exclusive panel of innovators where the best one will be selected as the winner and potentially turned into a project which could bring benefit to Ryanair',
    '<p class="title">Do I need to have a team to enter?</p>No. Just a vision and a willingness to work with people to make it happen. If your idea is selected, the Spark team will help you get a team together',
    '<p class="title">What does a good idea look like?</p>Simple and concise. It doesn\'t need to be a detailed submission just the seed of an idea that we can grow into a prototype. Here are some examples:<br/><br/>- A mobile app to submit EU261 forms<br/>- It\'s a weekend, get me out of here on the cheap - A reminder service that prompts you to get away for a weekend<br/>- Move from booking.com - an automated service to cancel your booking.com reservation for free and get the same room from ryanair and 10% back in travel credit<br/>- Ask the experts: A platform fo you to ask your questions to the Ryanair employees and get an answer back. E.g. What are the VISA restrictions for ISRAEL? No need to know who to speak while we start building an archive of questions and answers',
    '<p class="title">Do I have to work for 24 hours?</p>No! We realize that 24 hours is a long time and people may need to attend to other commitments, or just shower and sleep!<br/>The idea is for you, with support from your manager, to set aside "Spark Day" where you can work solely on bringing your idea to life and prepare to pitch it to the panel. Depending on how it goes, you might want to stay for 24 hours to finish, or take a break and come back the next morning to finish.',
    '<p class="title">Is there any restriction to the technology I can use?</p>No... But when you are pitching your idea at the end you will have to speak about how it will integrate with our current technology.<br/>The mentors, design and development teams will help you with this.',
    '<p class="title">What is the showcase like?</p>Have you seen Dragons Den? You will get 5 minutes to pitch your idea followed by 3 minutes Q&A from the panel.<br/>The event will be open to all staff so your friends can come along and support you.<br/>At the end of the event the panel will have a few minutes to deliberate and will announce the winner.<br/>We will be making sure the event will be fun and informal and you will have all the preparation and dry runs you need.<br/>It doesn\'t have to be a solo effort either. Some of the best pitches are often team affairs!<br/>We would ask all idea owners/ presenters to be in Dublin for the presentation.<br/>We want to see something tangible at the end of the 24 hours so the majority of marks will be going to any demos or prototype build as opposed to super cool super slick powerpoint presentations.',
    '<p class="title">I haven\'t done a presentation before!!!</p>Don\'t worry we will guide you through the process and have plenty of practice runs to make sure you will be a success.',
    '<p class="title">I am not based in Dublin. Can I participate?</p>Absolutely. We would ask however that the idea owner is present in Dublin for "Spark Day" with as much of their team as possible.',
    '<p class="title">Will I get paid overtime / get time in lieu?</p>No, we believe that this sort of event doesn\'t need this type of reward.<br/>For some science behind our thinking check out this video - <a class="purple" href="https://youtu.be/u6XAPnuFjJc" title="The surprising truth about what motivates us">The surprising truth about what motivates us</a>.',
    '<p class="title">Is there a prize?</p>Yes! But the only way to find out is to win &#9786;',
    '<p class="title">I have more questions</p>Check out the <a class="purple" href="/meet-the-team.html" title="Meet the team">Meet the team</a> section of the site for details on who to speak to.'
    /* tslint:enable */
  ];
}
