import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-promo-block',
  templateUrl: './promo-block.component.html',
  styleUrls: ['./promo-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromoBlockComponent {
  public blocks = [
    {
      icon: 'dream-it.svg',
      title: 'Dream it',
      description: 'Got an idea about how we can improve our business? We want to hear from you',
    },
    {
      icon: 'build-it.svg',
      title: 'Build it',
      description: 'Take 24 hours to build a working prototype, you will get all the resources you need',
    },
    {
      icon: 'show-it.svg',
      title: 'Show it',
      description: 'Demonstrate your ideas in the Spark showcase in front of your peers to see who will be the first ever Spark champion',
    }
  ];
}
