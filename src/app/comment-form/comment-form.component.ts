import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../_services/post.service';
import { ValidatorService } from '../_services/validator.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent {
  public commentForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private validatorService: ValidatorService
  ) {
    this.initializeCommentForm();
  }

  private initializeCommentForm(): void {
    this.commentForm = this.formBuilder.group({
      name: ['', [Validators.required, this.validatorService.whiteSpaceValidator]],
      comment: ['', [Validators.required, this.validatorService.whiteSpaceValidator]],
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
