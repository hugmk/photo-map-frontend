// image-url.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'imageUrl',
  standalone: true
})
export class ImageUrlPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    
    // Si l'URL est déjà complète, la retourner telle quelle
    if (value.startsWith('http://') || value.startsWith('https://')) {
      return value;
    }
    
    // Sinon, ajouter l'URL de base de l'API
    return `${environment.apiUrl}${value}`;
  }
}
