export interface IComment {
  commentId: string;
  parentId: string | null;
  ownerId: string;
  ownerName: string;
  ownerAvatar: string;
  commentTime: number;
  commentText: string;
  replyList: IComment[];
}
