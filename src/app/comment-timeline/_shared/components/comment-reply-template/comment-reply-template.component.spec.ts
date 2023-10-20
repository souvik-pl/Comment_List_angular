import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentReplyTemplateComponent } from './comment-reply-template.component';

describe('CommentReplyTemplateComponent', () => {
  let component: CommentReplyTemplateComponent;
  let fixture: ComponentFixture<CommentReplyTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentReplyTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentReplyTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
