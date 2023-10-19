import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../_services/storage.service';
import { IComment } from '../_shared/interfaces/comment.interface';
import { OWNER_AVATAR, OWNER_ID } from '../_shared/constants/credential';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent {
  public commentForm!: FormGroup;
  private allComments!: IComment[];

  constructor(
    private formBuilder: FormBuilder,
    private storageService: StorageService
  ) {
    this.initializeCommentForm();
    this.storageService.storeSubject.subscribe((comments: IComment[]) => {
      this.allComments = comments;
    });
  }

  private initializeCommentForm(): void {
    this.commentForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      comment: ['', [Validators.required]]
    });
  }

  public commentFormSubmitHandler(): void {
    const newCommentData: IComment = {
      commentId: String(Date.now()),
      parentId:  null,
      ownerId: OWNER_ID,
      ownerName: this.commentForm.get('name')!.value,
      ownerAvatar: OWNER_AVATAR,
      commentTime: Date.now(),
      commentText: this.commentForm.get('comment')!.value,
      replyList: []
    };

    const upadtedCommentList = [newCommentData, ...this.allComments];
    this.storageService.putComments(upadtedCommentList);
    this.storageService.storeSubject.next(upadtedCommentList);
    this.commentForm.reset();
  }
}
