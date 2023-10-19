import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent {
  public commentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initializeCommentForm();
  }

  private initializeCommentForm(): void {
    this.commentForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      comment: ['', [Validators.required]]
    });
  }

  public commentFormSubmitHandler(): void {
    console.log(this.commentForm.value);
  }
}
