import { Component, Input } from '@angular/core';
import { PostService } from 'src/app/_services/post.service';
import { OWNER_ID } from 'src/app/_shared/constants/credential';
import { IComment } from 'src/app/_shared/interfaces/comment.interface';
import { IUpdateComment } from 'src/app/_shared/interfaces/update-comment.interface';

@Component({
  selector: 'app-reply-card',
  templateUrl: './reply-card.component.html',
  styleUrls: ['./reply-card.component.scss']
})
export class ReplyCardComponent {
  @Input() public replyData!: IComment;
  public currentUser: string = OWNER_ID;
  public isReplyEditable: boolean = false;

  constructor(private postService: PostService) {}

  public editButtonClickHandler(): void {
    this.isReplyEditable = true;
  }

  public cancelEditReplyHandler(): void {
    this.isReplyEditable = false;
  }

  public updateReplyHandler(event: IUpdateComment): void {
    this.postService.updateReply(
      event.parentId!,
      event.commentId,
      event.commentText
    );
    this.cancelEditReplyHandler();
  }
}
