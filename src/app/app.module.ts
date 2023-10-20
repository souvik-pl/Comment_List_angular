import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentTimelineComponent } from './comment-timeline/comment-timeline.component';
import { CommentCardComponent } from './comment-timeline/comment-card/comment-card.component';
import { ReplyCardComponent } from './comment-timeline/reply-card/reply-card.component';
import { StorageService } from './_services/storage.service';
import { PostService } from './_services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    CommentFormComponent,
    CommentTimelineComponent,
    CommentCardComponent,
    ReplyCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StorageService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
