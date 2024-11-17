import { Component } from '@angular/core';
import { EstatePreviewShowcaseComponent } from './estate-preview-showcase/estate-preview-showcase.component';
import { EstatePreviewDescriptionComponent } from './estate-preview-description/estate-preview-description.component';

@Component({
  selector: 'app-estate-preview',
  standalone: true,
  imports: [EstatePreviewShowcaseComponent, EstatePreviewDescriptionComponent],
  templateUrl: './estate-preview.component.html',
  styleUrl: './estate-preview.component.scss',
})
export class EstatePreviewComponent {}
