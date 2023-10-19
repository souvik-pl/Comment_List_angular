import { Component, Input } from '@angular/core';
import { OWNER_ID } from 'src/app/_shared/constants/credential';
import { IComment } from 'src/app/_shared/interfaces/comment.interface';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent {
  @Input() public commentData!: IComment;
  public currentUser: string = OWNER_ID;
}
