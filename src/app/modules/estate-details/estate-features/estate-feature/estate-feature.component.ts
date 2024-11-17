import { Component, Input } from '@angular/core';
import { TypographyComponent } from '../../../../components/typography';

@Component({
  selector: 'app-estate-feature',
  standalone: true,
  imports: [TypographyComponent],
  templateUrl: './estate-feature.component.html',
  styleUrl: './estate-feature.component.scss',
})
export class EstateFeatureComponent {
  @Input({ required: true })
  featureName = '';
}
