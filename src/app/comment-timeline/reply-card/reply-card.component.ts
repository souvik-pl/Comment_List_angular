import { Component, Input } from '@angular/core';
import { OWNER_ID } from 'src/app/_shared/constants/credential';
import { IComment } from 'src/app/_shared/interfaces/comment.interface';

@Component({
  selector: 'app-reply-card',
  templateUrl: './reply-card.component.html',
  styleUrls: ['./reply-card.component.scss']
})
export class ReplyCardComponent {
  @Input() public replyData!: IComment;
  public currentUser: string = OWNER_ID;
}
