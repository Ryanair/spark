import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {
  @Input() public image: string;
  @Input() public reverseImagePosition: boolean;
  @Input() public title: string;
  @Input() public description: string;
  @Input() public linkText: string;
  @Input() public linkLocation: string;
}
