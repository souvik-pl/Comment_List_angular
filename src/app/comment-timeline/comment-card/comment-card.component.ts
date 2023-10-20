import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/_services/post.service';
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
  public isRepliesExpanded = false;
  public replyForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService
  ) { }

  public toggleReplisVisibility(): void {
    this.isRepliesExpanded = !this.isRepliesExpanded;

    if (this.isRepliesExpanded) {
      this.replyForm = this.formBuilder.group({
        reply: ['', [Validators.required]]
      })
    }
  }

  public replyFormSubmitHandler() {
    this.postService.postReply(this.commentData.commentId, this.replyForm.get('reply')!.value);
    this.replyForm.reset();
  }
}
