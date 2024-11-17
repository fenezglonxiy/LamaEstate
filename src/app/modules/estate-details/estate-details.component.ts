import { Component, Input } from '@angular/core';
import { EstatePreviewComponent } from './estate-preview';
import { EstateFeaturesComponent } from './estate-features';

@Component({
  selector: 'app-estate-details',
  standalone: true,
  imports: [EstatePreviewComponent, EstateFeaturesComponent],
  templateUrl: './estate-details.component.html',
  styleUrl: './estate-details.component.scss',
})
export class EstateDetailsComponent {
  @Input()
  id!: string;
}
