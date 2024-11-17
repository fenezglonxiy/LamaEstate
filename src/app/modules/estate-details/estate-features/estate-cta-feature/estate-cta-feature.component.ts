import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../components/button';
import { TypographyComponent } from '../../../../components/typography';
import { SvgIconComponent } from '../../../../components/svg-icon';

@Component({
  selector: 'app-estate-cta-feature',
  standalone: true,
  imports: [ButtonComponent, TypographyComponent, SvgIconComponent],
  templateUrl: './estate-cta-feature.component.html',
  styleUrl: './estate-cta-feature.component.scss',
})
export class EstateCtaFeatureComponent {}
