import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent {
  public commentForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService
  ) {
    this.initializeCommentForm();
  }

  private initializeCommentForm(): void {
    this.commentForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      comment: ['', [Validators.required]]
    });
  }

  public commentFormSubmitHandler(): void {
    this.postService.postComment(
      this.commentForm.get('name')!.value,
      this.commentForm.get('comment')!.value
    );

    this.commentForm.reset();
  }
}
