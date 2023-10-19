import { Injectable } from '@angular/core';
import { IComment } from '../_shared/interfaces/comment.interface';
import { Subject } from 'rxjs';

export const STORAGE_KEY = "comments";

@Injectable()
export class StorageService {

  public storeSubject = new Subject<IComment[]>();

  constructor() { }

  public putComments(data: IComment[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  public getComments(): IComment[] | null{
    return JSON.parse(localStorage.getItem(STORAGE_KEY)!);
  }
}
