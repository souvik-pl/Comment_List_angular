import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { IComment } from '../_shared/interfaces/comment.interface';
import { OWNER_AVATAR, OWNER_ID, OWNER_NAME } from '../_shared/constants/credential';

@Injectable()
export class PostService {
  private allComments!: IComment[];

  constructor(private storageService: StorageService) {
    this.storageService.storeSubject.subscribe((comments: IComment[]) => {
      this.allComments = comments;
    });
  }

  public postComment(ownerName: string, commentText: string): void {
    const newCommentData: IComment = {
      commentId: String(Date.now()),
      parentId:  null,
      ownerId: OWNER_ID,
      ownerName: ownerName,
      ownerAvatar: OWNER_AVATAR,
      commentTime: Date.now(),
      commentText: commentText,
      replyList: []
    };

    const upadtedCommentList = [newCommentData, ...this.allComments];
    this.storageService.putComments(upadtedCommentList);
    this.storageService.storeSubject.next(upadtedCommentList);
  }

  public postReply(parentCommentId: string, replyText: string) {
    const newReplyData: IComment = {
      commentId: String(Date.now()),
      parentId:  parentCommentId,
      ownerId: OWNER_ID,
      ownerName: OWNER_NAME,
      ownerAvatar: OWNER_AVATAR,
      commentTime: Date.now(),
      commentText: replyText,
      replyList: []
    };

    const index: number = this.allComments.findIndex((comment: IComment) => comment.commentId === parentCommentId);

    this.allComments[index].replyList.unshift(newReplyData);
    this.storageService.putComments(this.allComments);
    this.storageService.storeSubject.next(this.allComments);
  }
}
