import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getComments(photoId: string) {
    return this.http.get<Comment[]>(
      `${this.apiUrl}/photos/${photoId}/comments`
    );
  }

  addComment(photoId: number, content: string) {
    return this.http.post<Comment>(
      `${this.apiUrl}/photos/${photoId}/comments`,
      { content }
    );
  }
}
