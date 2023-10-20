import { Component } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { IComment } from '../_shared/interfaces/comment.interface';
import { DUMMY_COMMENTS } from '../_shared/constants/dummy_comments';

@Component({
  selector: 'app-comment-timeline',
  templateUrl: './comment-timeline.component.html',
  styleUrls: ['./comment-timeline.component.scss']
})
export class CommentTimelineComponent {
  public allComments!: IComment[];

  constructor(private storageService: StorageService) {
    this.checkIfAnyCommentsAvailableInStorage();
    this.storageService.storeSubject.subscribe((comments: IComment[]) => {
      this.allComments = comments;
    });
  }

  private checkIfAnyCommentsAvailableInStorage(): void {
    const comments: IComment[] | null = this.storageService.getComments();
    if (!comments) {
      this.putIntialCommentsInStorage();
    }
    else {
      this.allComments = comments;
      this.storageService.storeSubject.next(comments);
    }
  }

  private putIntialCommentsInStorage(): void {
    this.storageService.putComments(DUMMY_COMMENTS);
    this.allComments = DUMMY_COMMENTS;
    this.storageService.storeSubject.next(DUMMY_COMMENTS);
  }
}
