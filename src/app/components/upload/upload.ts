import { Component } from '@angular/core';
import { PhotoService } from '../../services/photo-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload',
  imports: [FormsModule],
  templateUrl: './upload.html',
  styleUrl: './upload.scss',
})
export class Upload {
selectedFile: File | null = null
  loading = false
  error = ''

  constructor(
    private photoService: PhotoService,
    private router: Router
  ) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0]
      this.error = ''
    }
  }

  submit() {
    if (!this.selectedFile) return;

    this.loading = true;
    this.error = '';

    const formData = new FormData();
    formData.append('image', this.selectedFile);

    this.photoService.uploadPhoto(formData).subscribe({
      next: () => {
        this.loading = false
        this.router.navigate(['/map'])
      },
      error: (err) => {
        this.loading = false
        this.error = err.error?.message || 'Upload failed'
      }
    });
  }
}
