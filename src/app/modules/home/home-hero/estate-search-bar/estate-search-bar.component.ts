import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../../../components/button';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  FormControlComponent,
  FormFieldComponent,
  FormItemComponent,
  FormLabelComponent,
} from '../../../../components/form';
import { InputComponent } from '../../../../components/input';
import { CommonModule } from '@angular/common';
import { FillUpSpaceDirective } from '../../../../directives';

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
    CommonModule,
    FillUpSpaceDirective,
  ],
  templateUrl: './estate-search-bar.component.html',
  styleUrl: './estate-search-bar.component.scss',
})
export class EstateSearchBarComponent {
  fb = inject(FormBuilder);

  estateSearchFormGroupModel = this.fb.nonNullable.group({
    location: this.fb.control(''),
    minPrice: this.fb.control(''),
    maxPrice: this.fb.control(''),
  });

  readonly estateSearchFormFields = [
    {
      control: this.estateSearchFormGroupModel.controls.location,
      type: 'text',
      placeholder: 'City Location',
    },
    {
      control: this.estateSearchFormGroupModel.controls.minPrice,
      type: 'number',
      placeholder: 'Min Price',
    },
    {
      control: this.estateSearchFormGroupModel.controls.maxPrice,
      type: 'number',
      placeholder: 'Max Price',
    },
  ] as const;
}
