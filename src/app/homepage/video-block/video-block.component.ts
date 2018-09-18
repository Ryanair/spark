import { isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-video-block',
  templateUrl: './video-block.component.html',
  styleUrls: ['./video-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoBlockComponent implements OnInit {
  public isToggled: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId) {
  }

  public ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      this.isToggled = true;
    }
  }

  public toggle(): void {
    this.isToggled = true;
  }
}
