import { Component, signal } from '@angular/core';
import { Photo } from '../../models/photo.model';
import { Comment } from '../../models/comment.model';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../../services/photo-service';
import { CommentService } from '../../services/comment-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ImageUrlPipe } from '../../pipes/image-url.pipe';

@Component({
  selector: 'app-photo-detail',
  imports: [FormsModule, CommonModule, ImageUrlPipe],
  templateUrl: './photo-detail.html',
  styleUrl: './photo-detail.scss',
})
export class PhotoDetail {
  photo = signal<Photo | undefined>(undefined);
  comments = signal<Comment[]>([]);
  newComment = ''

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private commentService: CommentService
  ) {}

  ngOnInit() {
    const photoId = this.route.snapshot.paramMap.get('id')
    if (!photoId) return

    this.loadPhoto(photoId)
  }

  loadPhoto(id: string) {
    this.photoService.getPhoto(id).subscribe(photo => {
      console.log('Photo reçue:', photo)
      this.photo.set(photo);
      this.comments.set(photo.comments || []);
    })
  }

  addComment() {
    const currentPhoto = this.photo();
    if (!this.newComment.trim() || !currentPhoto) return

    this.commentService
      .addComment(currentPhoto.id, this.newComment)
      .subscribe(comment => {
        this.comments.update(comments => [...comments, comment]);
        this.newComment = ''
      })
  }
}
