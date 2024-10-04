import { Component, inject } from '@angular/core';
import { TypographyComponent } from '../../../components/typography';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../components/button';
import {
  FormControlComponent,
  FormFieldComponent,
  FormItemComponent,
  FormLabelComponent,
} from '../../../components/form-field';
import { InputComponent } from '../../../components/input';

@Component({
  selector: 'app-estate-list-estate-search',
  standalone: true,
  imports: [
    TypographyComponent,
    ButtonComponent,
    FormFieldComponent,
    ReactiveFormsModule,
    FormItemComponent,
    FormLabelComponent,
    FormControlComponent,
    InputComponent,
  ],
  templateUrl: './estate-search.component.html',
  styleUrl: './estate-search.component.scss',
})
export class EstateSearchComponent {
  fb = inject(FormBuilder);

  locationFormControl = this.fb.control('');

  typeFormControl = this.fb.nonNullable.control<'any' | 'buy' | 'rent'>('any');

  propertyFormControl = this.fb.nonNullable.control<
    'any' | 'apartment' | 'house' | 'condo' | 'land'
  >('any');

  bedroomFormControl = this.fb.control('');

  minPriceFormControl = this.fb.control('');

  maxPriceFormControl = this.fb.control('');

  estateSearchForm = this.fb.nonNullable.group({
    location: this.locationFormControl,
    type: this.typeFormControl,
    property: this.propertyFormControl,
    bedroom: this.bedroomFormControl,
    minPrice: this.minPriceFormControl,
    maxPrice: this.maxPriceFormControl,
  });

  handleSubmit() {
    console.log(this.estateSearchForm.value);
  }
}
