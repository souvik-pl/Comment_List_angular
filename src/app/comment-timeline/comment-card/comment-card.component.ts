import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/_services/post.service';
import { ValidatorService } from 'src/app/_services/validator.service';
import { OWNER_ID } from 'src/app/_shared/constants/credential';
import { IComment } from 'src/app/_shared/interfaces/comment.interface';
import { IUpdateComment } from 'src/app/_shared/interfaces/update-comment.interface';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss'],
})
export class CommentCardComponent {
  @Input() public commentData!: IComment;
  public currentUser: string = OWNER_ID;
  public isRepliesExpanded = false;
  public replyForm!: FormGroup;
  public isCommentEditable: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private validatorService: ValidatorService
  ) { }

  public toggleRepliesVisibility(): void {
    this.isRepliesExpanded = !this.isRepliesExpanded;
    if (this.isRepliesExpanded) {
      this.replyForm = this.formBuilder.group({
        reply: ['', [Validators.required, this.validatorService.whiteSpaceValidator]],
      });
    }
  }

  public replyFormSubmitHandler(): void {
    this.postService.postReply(
      this.commentData.commentId,
      this.replyForm.get('reply')!.value
    );
    this.replyForm.reset();
  }

  public editButtonClickHandler(): void {
    this.isCommentEditable = true;
  }

  public cancelEditCommentHandler(): void {
    this.isCommentEditable = false;
  }

  public updateCommentHandler(event: IUpdateComment): void {
    this.postService.updateComment(
      event.commentId,
      event.commentText
    );
    this.cancelEditCommentHandler();
  }
}
