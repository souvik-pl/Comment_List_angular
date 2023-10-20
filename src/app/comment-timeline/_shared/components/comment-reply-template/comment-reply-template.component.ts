import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IComment } from 'src/app/_shared/interfaces/comment.interface';
import { IUpdateComment } from 'src/app/_shared/interfaces/update-comment.interface';

@Component({
  selector: 'app-comment-reply-template',
  templateUrl: './comment-reply-template.component.html',
  styleUrls: ['./comment-reply-template.component.scss']
})
export class CommentReplyTemplateComponent implements OnChanges {
  @Input() isEditable: boolean = false;
  @Input() commentData!: IComment;
  public commentForm!: FormGroup;
  @Output() cancelEvent: EventEmitter<void> = new EventEmitter();
  @Output() updateEvent: EventEmitter<IUpdateComment> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isEditable'].currentValue === true) {
      this.commentForm = this.formBuilder.group({
        comment: [this.commentData.commentText, [Validators.required]],
      });
    }
  }

  public updateHandler(): void {
    let updatedData: IUpdateComment = {
      commentId: this.commentData.commentId,
      parentId: this.commentData.parentId,
      commentText: this.commentForm.get('comment')!.value
    }
    this.updateEvent.emit(updatedData);
  }

  public cancelEditHandler(): void {
    this.cancelEvent.emit();
  }
}

