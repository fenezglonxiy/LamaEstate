import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../../../components/button';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  FormControlComponent,
  FormFieldComponent,
  FormItemComponent,
  FormLabelComponent,
} from '../../../../components/form-field';
import { InputComponent } from '../../../../components/input';

@Component({
  selector: 'app-home-hero-estate-search-bar',
  standalone: true,
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
    FormFieldComponent,
    FormItemComponent,
    FormLabelComponent,
    FormControlComponent,
    InputComponent,
  ],
  templateUrl: './estate-search-bar.component.html',
  styleUrl: './estate-search-bar.component.scss',
})
export class EstateSearchBarComponent {
  fb = inject(FormBuilder);

  locationFormControl = this.fb.control('');

  minPriceFormControl = this.fb.control('');

  maxPriceFormControl = this.fb.control('');

  estateSearchForm = this.fb.nonNullable.group({
    location: this.locationFormControl,
    minPrice: this.minPriceFormControl,
    maxPrice: this.maxPriceFormControl,
  });
}
